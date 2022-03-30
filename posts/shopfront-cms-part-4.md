---
title: "Project: Shopfront CMS - Part 4"
date: "March 29, 2022"
excerpt: "A detailed look at the Backend of my shop content management system."
sections: "Background/Back End Architecture/API -PUT-/API -POST-/Conclusion"
cover_image: "/images/posts/cmsPart1.png"
---

<a name="Background"></a>

## Background

So this project has officially dragged me through all kinds of difficulties. I know now that digging deeper isn't going to just magically give me understanding, it's digging deeper constantly that will help me learn.

Also, UI/UX is the worst thing in the world. Creating the API for this project and then having to create the forms and interfaces to interact with that API has been the worst experience. While it isn't like this is the first time, it is the first time that I have dealt with any sort of store/shop data.

So following my big breakthrough in the previous part of this series I have come to find myself in the midst of many many more problems. Luckily though the struggle I experienced then made me a better programmer now and I have been able to sit and think about other solutions to problems and try and look at things in different ways.

Ok well onto the architecture and current standing of my project.
<a name="Back End Architecture"></a>

## Back End Architecture

So there are three main routes

- /api/clothing
- /api/order
- /api/user

These three combined with GET/POST/PUT/DELETE make up my entire API. I am also using Sequelize combined with MySQL.

So in the API that I created there's is only about 1 or 2 complex parts that have been changed to fit the jumbled front end. Those mainly being the **creation** and **updating** of the clothing object.

The monstrosity of an object that I have created specifically for **Updating** looks like this.

**_Figure 1_**

```
const exampleBody = {
  clothing_id: 1,
  name: "Test Item",
  price: 200,
  description: "This is an update test item",
  color: [
    { color: "purple", id: 1 },
    { color: "orange", id: 2 },
    { color: "black", id: 3 },
  ],
  clothing_stock: [
    { xs: 2, s: 40, m: 22, l: 13, xl: 12, id: 1 },
    { xs: 2, s: 40, m: 22, l: 13, xl: 12, id: 2 },
    { xs: 2, s: 40, m: 22, l: 13, xl: 12, id: 3 },
  ],
  added_color: [{ color: "testing", xs: 2, s: 40, m: 22, l: 13, xl: 12 }],
  deleted_color: [{ color_id: 1, stock_id: 2 }],
};
```

And as I believe I explained in my previous post, this strange structure allows for smooth integration with a form where you can add colors/variants and remove colors/variants.

**So here is a bit of a breakdown**

**added_color:** This is an array of colors/variants that you have added in the form. When the backend deciphers this object it will know what colors to create based off of this array.

**deleted_color:** This is an array of colors/variants you have deleted. This exists primarily for previously existing colors/variants on the object. If you are editing the form and you have added a color/variant and have not saved your changes you can delete that added color/variant without changing the payload sent to the backend.

Now the way I am handling these items is a bit jumbled to say the least. I am still in the process of possibly deciding on a new solution, but ultimately this is how I am breaking down the payload when it is sent to the API.

<a name="API -PUT-"></a>

## API -PUT-

So first things first let me show you how the API consumes the payload shown in Figure 1. Here is the PUT route for Clothing.

**_Figure 2_**

```
const { ClothingItem, ClothingStock, Color } = require("../models");

router.put("/", async (req, res) => {
  // Handling updating -------------
  const clothUpdate = req.body;
  try {
    await ClothingItem.update(
      {
        name: clothUpdate.name,
        price: clothUpdate.price,
        description: clothUpdate.description,
      },
      {
        where: {
          id: clothUpdate.clothing_id,
        },
      }
    );

    await clothUpdate.color.forEach((element) => {
      Color.update(
        {
          color: element.color,
        },
        {
          where: {
            id: element.id,
          },
        }
      ).catch((err) => {
        console.log(err);
      });

      ClothingStock.update(
        {
          xs: element.xs,
          s: element.s,
          m: element.m,
          l: element.l,
          xl: element.xl,
        },
        {
          where: {
            id: element.stock_id,
          },
        }
      ).catch((err) => {
        console.log(err);
      });
    });

    // Handling adding -------------
    if (
      clothUpdate.added_color !== undefined ||
      clothUpdate.added_color.length != 0
    ) {
      await clothUpdate.added_color.forEach((element) => {
        Color.create({
          color: element.color,
          clothing_item_id: clothUpdate.clothing_id,
        }).then((newColor) => {
          ClothingStock.create({
            xs: element.xs,
            s: element.s,
            m: element.m,
            l: element.l,
            xl: element.xl,
            color_id: newColor.id,
            item_id: clothUpdate.clothing_id,
          });
        });
      });
    }

    // Handling deleting -------------
    if (
      clothUpdate.deleted_color !== undefined ||
      clothUpdate.deleted_color.length != 0
    ) {
      await clothUpdate.deleted_color.forEach((element) => {
        Color.destroy({
          where: {
            id: element.color_id,
          },
        });
        ClothingStock.destroy({
          where: {
            item_id: element.stock_id,
          },
        });
      });
    }
    res.sendStatus(200);
  } catch (err) {
    res.status(400).json(err);
  }
});
```

<details>
In Sequelize creating/updating items is done with a promise that resolves. Because of this you'll see some nested creates/updates that happen due to dependency related creation.
</details>

So it is definitely a lot of lines but once it's broken down it will make a lot more sense. So looking back at Figure 1 you can see that there are 4 possible arrays to go through. I'll explain the **color** and **clothing_stock** portions when I cover the POST route. For now I'll detail **added_color** and **deleted_color**.

**_Figure 3_**

```
// Handling adding -------------
if (
    clothUpdate.added_color !== undefined ||
    clothUpdate.added_color.length != 0
) {
    console.log("adding color");
    await clothUpdate.added_color.forEach((element) => {
        Color.create({
            color: element.color,
            clothing_item_id: clothUpdate.clothing_id,
        }).then((newColor) => {
            ClothingStock.create({
            xs: element.xs,
            s: element.s,
            m: element.m,
            l: element.l,
            xl: element.xl,
            color_id: newColor.id,
            item_id: clothUpdate.clothing_id,
            });
        });
    });
}
```

This segment of **Figure 2** contains the handling of the add_color array. So to ensure that colors that are added are not mixed up with pre-existing colors I have added them into their own separate array. That way when ciphering the data the Sequelize knows what to create and what to update.

**_Figure 4_**

```
added_color: [{ color: "testing", xs: 2, s: 40, m: 22, l: 13, xl: 12 }]

```

I first check to see if there is any content in that array. Then from there I run a forEach on the array creating every color in the array and in the promise creating the ClothingStock item that depends on that color.

Next comes the deleted_color array and how that is handled.

**_Figure 5_**

```
// Handling deleting -------------
if (
    clothUpdate.deleted_color !== undefined ||
    clothUpdate.deleted_color.length != 0
) {
    await clothUpdate.deleted_color.forEach((element) => {
        Color.destroy({
            where: {
                id: element.color_id,
            },
        });
        ClothingStock.destroy({
            where: {
                item_id: element.stock_id,
            },
        });
    });
}
```

This section from **Figure 2** shows the process how the delete_color array is handled. Again just like in the added_color array I check if there is any content and from there I loop through each element and forEach element I delete both the Color and the ClothingStock for that color.

```
deleted_color: [{ color_id: 1, stock_id: 2 }]
```

You'll notice that the deleted array only requires the ID's of the color and its corresponding stock to function. Those are the only two variables required to successfully delete both, and thus remove the entire color and its dependants.

<a name="API -POST-"></a>

## API -POST-

**_Figure 6_**

```
const exampleBody = {
    clothing_id: 1,
    name: "Test Item",
    price: 200,
    description: "This is an update test item",
    color:
    [
        {
            color: "purple",
            id: 1
            clothing_stock:[
                {
                    id: 1
                    xs: 2,
                    s: 40,
                    m: 22,
                    l: 13,
                    xl: 12,
                }
            ]
        },
        {
            color: "orange",
            id: 2
            clothing_stock:[
                {
                    xs: 2,
                    s: 40,
                    m: 22,
                    l: 13,
                    xl: 12,
                    id: 2
                }
            ]
        },
    ],
};
```

So here is the basic payload object that is sent if you want to create a piece of clothing. You have the different colors/variants and their various sizes and stock numbers.

It is also quite interesting as the opposite is true. While this is the payload sent to update a piece of clothing, **this is also the payload you get when you retrieve a piece of clothing**. Not sure if that is always true with most APIs but I just thought I would point that out.

**_Figure 7_**

```
const { ClothingItem, ClothingStock, Color } = require("../models");

router.post("/", async (req, res) => {
  const theClothing = req.body;
  try {
    await ClothingItem.create({
      name: theClothing.name,
      price: theClothing.price,
      description: theClothing.description,
    }).then((clothing) => {
      if (theClothing.color !== undefined || theClothing.color.length != 0) {
        try {
          theClothing.color.forEach((element) => {
            console.log(element);
            Color.create({
              color: element.color,
              clothing_item_id: clothing.id,
            }).then((newColor) => {
              ClothingStock.create({
                xs: element.xs,
                s: element.s,
                m: element.m,
                l: element.l,
                xl: element.xl,
                color_id: newColor.id,
                item_id: clothing.id,
              });
            });
          });
        } catch (err) {
          console.error(err);
        }
      }
    });

    res.send("Good!");
  } catch (err) {
    res.status(400).json(err);
  }
});

```

This is the /api/clothing POST route. As you can see it is fairly convoluted however not nearly to the extent that the PUT route was.

In Sequelize creating/updating items is done with a promise that resolves. Because the Color object is dependent on the Clothing object creating the color object in that promise was necessary to grab the clothing item ID and attach it as a foreign key. Chaining that same solution onward into the ClothingStock object was also necessary for the same reasons.

<a name="Closing Thoughts"></a>

## Closing Thoughts

This is about it for my in depth take on the current version of my API, it will probably change at some point but for now I felt it was fleshed out enough to be presentable. The other routes, DELETE/GET are a lot less interesting and just perform single functions.

I have met many creators, developers, programmers, and brilliant thinkers over the past couple of months and with that I have absorbed some more insight into what it means to put on any one of those hats. I am finding that documentation might just be my weakest skill. I can do things and verbally explain them but when it comes to making a readme file my mind goes blank and all I can think of is taking some screenshots, throwing them in there and calling it a day. Its definitely a weak point for me. I am hoping however, that through this project and this body of content that I have created surrounding it I might be able to create a well documented project.

In my next post I'll be discussing the Frontend of my project and boy has it been a tough frontend. There are still things that as a user one might find are a bit confusing, but it got my inner UI/UX dev going and I enjoyed building it.

Thank you for your time and I hope you have a great day!
