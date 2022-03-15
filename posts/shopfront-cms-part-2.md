---
title: "Project: Shopfront CMS - Part 2"
date: "March 14, 2022"
excerpt: "A follow up post detailing some roadblocks I have faced so far and how I overcame them."
sections: "Introduction/Backend Breakthrough/Optimized? Not so much/Closing Thoughts
"
cover_image: "/images/posts/cmsPart1.png"
---

<a name="Introduction"></a>

## Introduction

So the backend portion of this project is just about finished and I am now moving on to creating the dashboard so that you can update, delete and add different items with some sort of functional user interface. **Therein lies my first roadblock**. While I have some experience with user interfaces like forms, inputs, buttons, I had never really created a detailed form involving multiple complexities.

It wasn't until earlier this year that I found myself forced to make a form for an internship I was trying for, _It didn't go as expected_, however I did find myself face to face with a form. A fairly simple form at that. It took me three days.

I am simply finding myself in the rabbit hole that is UI/UX design and due to not having much experience I tend to second guess myself each step of the way. Now all this is a different article for a different day. Today's big milestone happened on the backend.
<a name="Backend Breakthrough"></a>

## Backend Breakthrough

So while creating the form, I was thinking about the additions I could make, the colors I could change. Oh and if I added a popup design that did this or that. It was while I was working on my modal that I sat and thought to myself. How are people even going to be able to get this information to even be able to edit it? And even more so how will my database recieve this edited information?

My data is being handled where there is a single clothing item that can have multiple colors/variants. How many? Its up to the store owner, and each color/variant has stock values for each size ranging from small to extra large.

**So this had me struggling for 2 main reasons.**

1. The data being sorted was not a static length. I needed to modify my backend to be able to handle that dynamic data
2. The data being sent from the form also needed to be dynamic and if they added more colors I would need to account for the added stock item as well.

This has led me to create something I've, weirdly enough, never had to create and that is a payload that includes arrays.

```
{
    "clothing_id": 1,
    "name": "Test Item",
    "price": 200,
    "description": "This is an update test item",
    "color": [
        {"color":"purple", "id": 1},
        {"color":"orange", "id": 2},
        {"color":"black", "id": 3}
    ],
    "clothing_stock": [
        {"xs": 2,"s": 40,"m": 22,"l": 13,"xl": 12, "id": 1},
        {"xs": 2,"s": 40,"m": 22,"l": 13,"xl": 12, "id": 2},
        {"xs": 2,"s": 40,"m": 22,"l": 13,"xl": 12, "id": 3}
    ]
    "added_color": [
        {"color": "testing", "xs": 2,"s": 40,"m": 22,"l": 13,"xl": 12}
    ],
    "deleted_color": [
        {"color_id": 1, "stock_id": 2}
    ]
}
```

Utilizing this payload along with a tweak in my backend looping through the data I am able to successfully update no matter the data sent. I am also handling the addition of more colors as well as the deletion of pre-existing colors.

<a name="Optimized? Not so much"></a>

## Optimized? Not so much

This project has strained quite a bit of my knowledge dealing with Sequelize and MySQL and the request, when made, does take some time. I am hoping however that due to this just being a smaller project there isn't really much need to try and cut down on loops or for statements.

I am currently using forEach loops to grab the array data and run through it. From there I am making an SQL query based on it. It's not the prettiest looking backend I've made but it is definitely the most complex.

An answer to this problem that I was considering is to create separate pages for each step of the creation process so then I wouldn't be making calls to the backend if I didn't need to. **Currently as it stands no matter what you do, whether you update, add, or remove, you will be sending one request** and to me that seemed like a better solution. Easier on the user.

<a name="Closing Thoughts"></a>

## Closing Thoughts

In closing I do feel quite good about my progress. The way that the project is progrssing is great, atleast at my own pace. No deadlines. No rushing. Just taking things day by day and seeing results that I can share. Thanks for reading.

Hope you all have a wonderful day.
Until next time.
