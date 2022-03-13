---
title: "Project: Shopfront CMS - Part 1"
date: "March 12, 2022"
excerpt: "An introduction to my shopfront content management system I am working on."
sections: "Introduction/Background/Sequel Relationships/One Size Doesn't Fit All/Closing Thoughts
"
cover_image: "/images/posts/cmsPart1.png"
---

<a name="Introduction"></a>

## Introduction

While on my path of learning how to program, myself being a junior fullstack developer,
the hardest thing that Ive found on my journey has been direction. To that point
it has also been more of what to do not how to do it. There are plenty of tutorials
online telling you how to use X framework with Y dependancy but I've found that
there is no **big project** that will make you a better developer and that what
you create is up to you.

This is what I like about programming. The freedom and the learning all make for
such a wonderful playground of creation. In my long and arduous journey through
valleys and over mountains I have found within myself that the next project that
I need to work on to display some recent knowledge that I have come across is a
content management system.
<a name="Background"></a>

## Background

So I was digging through some shopify documentation, watching a couple of tutorials
and learned that shopify's content management system could be implemented separately
and used in an iFrame in their developer portal. So the idea came to me to create
just that and then put up my own mock store front attatched to it.

So with that being said I needed to select technologies to use and for that I just
went with what comes quickest to me and that is a simple MERN stack with MySQL.

- React
- Tailwind
- Express
- MySQL
- Sequelize

Sequelize as an ORM has been something I've really been digging into lately and
im realizing that ORM's in general are powerful technologies. Their mobility and
functionality was something I took for granted while learning the MERN stack. Migrations
being a fairly big part of my more recent learning.

<a name="Sequel Relationships"></a>

## Sequel Relationships

Since this is a shop front I had to think about how to handle the data. I also
needed some frame of reference to be able to populate with items not too simple
but also something not too complex. I decided on using clothing as my middle ground
example. So now I had to think about how to handle stock as well as different colors of
clothing.

To conceptualize I thought of it like this. A single piece of clothing can have
multiple colors. Each color can have a different stock amount. So single stock is to
individual color while multiple colors are to single clothing.

```
ClothingItem.hasMany(Color, {
  foreignKey: "clothing_item_id",
  onDelete: "CASCADE",
});

ClothingItem.hasMany(ClothingStock, {
  foreignKey: "item_id",
  onDelete: "CASCADE",
});

Color.belongsTo(ClothingItem, {
  foreignKey: "clothing_item_id",
});

Color.hasOne(ClothingStock, {
  foreignKey: "color_id",
  onDelete: "CASCADE",
});

ClothingStock.belongsTo(Color, {
  foreignKey: "color_id",
});

ClothingStock.belongsTo(ClothingItem, {
  foreignKey: "item_id",
});
```

<details>
   <summary>Simple Mistake</summary>
   I had originally kept my relationships how I had spoken them, however on
   deletion the issue was that stock didnt belong to clothing only to color.
   So adding the relationship of clothing to stock was necessary.
   <pre>
   <code>
ClothingItem.hasMany(ClothingStock, {
   foreignKey: "item_id",
   onDelete: "CASCADE",
});
</code>
   </pre>
</details>
<a name="One Size Doesn't Fit All"></a>

## One Size Doesn't Fit All

Another complexity besides relationships was how to handle different sizes. Each
color has its own stock sure, but not directly. Atleast not in a way that effects
the customer. Stock is tied down to the color and then furthermore the size.

So I used simple small medium large conventions and added that onto the stock model.

```
    xs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    s: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    m: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    l: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    xl: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
```

So that about sums up the complexity. A single item of clothing has a certain
amount of colors to chose from. Selecting a color will show you available sizes
in that color. Then selecting a size and purchasing will diminish the stock in
that size and color.

It seems like a good way of thinking about the concept but I suppose only time
will tell, or moreso only a better programmer than me will tell.

<a name="Closing Thoughts"></a>

## Closing Thoughts

Overall this project has been very exciting. Personally I am a bit more
of a backend developer than a frontend one so the idea of creating an API is
very enjoyable. The main problem I am facing now is developing the interface
to interact with the API. Tailwind does come in really handy and has actually
been my go to for frontend design lately. This blog was made using it.

Hope you all have a wonderful day.
Until next time.
