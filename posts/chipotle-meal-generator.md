---
title: "Project: Chipotle Meal Generator"
date: "May 14, 2022"
excerpt: "An overview of my Chipotle Meal randomizer."
sections: "Introduction/Background/Tech Stack - Vite/Tech Stack - TypeScript/Functionality and Styling/Closing Thoughts"
cover_image: "/images/posts/chipotle.png"
---

<a name="Introduction"></a>

## Introduction

Hello, I am back again and this time with news on my latest project. It isn't really a big project but I really wanted to document my thought process as well as dive into the project to share what I created.

The project generates a random chipotle meal within a specific criteria. The items are shown and then the price and calories are totalled up and displayed. A very short, simple and low calorie project.

<a name="Background"></a>

## Background

This project was a part of a technical challenge for a company that I have been applying for. I was given this project around 3pm and had it finished and turned in come 10pm the following day. The task was simple.

`create a website that generates a random meal at Chipotle`

They even gave me some starting data to help me out.

```js
export const mealTypes = ["burrito", "bowl", "tacos"];

export const proteinTypes = [
  {
    name: "chicken",
    cost: 8.6,
  },
  {
    name: "steak",
    cost: 10.2,
  },
  {
    name: "barbacoa",
    cost: 10.2,
  },
  {
    name: "carnitas",
    cost: 9.25,
  },
  {
    name: "veggie",
    cost: 8.6,
  },
  {
    name: "sofritas",
    cost: 8.6,
  },
];

export const beanTypes = ["black", "pinto"];

export const riceTypes = ["white rice", "brown rice", "cauliflower rice"];

export const salsaTypes = [
  "tomato",
  "tomatillo-green chili",
  "tomatillo-red chili",
  "vinagrette",
];

export const toppings = [
  "sour cream",
  "corn",
  "fajita veggies",
  "romaine lettuce",
  "cheese",
];

export const extras = [
  {
    name: "guac",
    cost: 2.6,
  },
  {
    name: "queso",
    cost: 1.65,
  },
];
```

I thought to myself "Wow this is going to be really easy and fun!" It was sort of easy but fun didn't quite describe the experience. Let's get into the technology used.

<a name="Tech Stack - Vite"></a>

## Tech Stack - Vite

So there were some glaring issues that I had to come to terms with. First off was the tech stack. It used TypeScript, Yarn, Vite, and TailwindCSS. I had a bit of experience with all of these technologies except for Vite. I had only heard of people talking about it and how fast it was on occasion.

I had a lot of experience with TailwindCSS so that was a breeze if I am being honest. Yarn also was fairly straight forward, it's essentially npm just faster with better version control.

Now moving back to Vite. It is just a bundler, like webpack, however there is a huge difference between the two which I didn't come to realize until the end of my project when, of course, I had to bundle and host it. In my mind I thought "Well im finished time to push to a gh-pages branch and host on github pages" but sadly it did not go that smooth. When Vite builds your project it puts the build into a `dist` folder which is not compatible with gh-pages standard react workflow which revolves around npm and a `build` folder.

It took multiple tries but basically I wound up creating gh-pages as a subtree of my main branch, only pushing the `dist` folder to it and it worked... after about the third or fourth time.

Steps were as follows

- `npm run build` - creates dist folder
- `git add dist -f` - only adds dist folder to commit
- `git commit -m "Adding dist"` - Set commit message
- `git subtree push --prefix dist origin gh-pages` - push dist to gh-pages subtree

It was a real headache but a learning process nonetheless. The next part of the stack that gave me a tough time was the "strongly typed" language.

<a name="Tech Stack - TypeScript"></a>

## Tech Stack - TypeScript

TypeScript I was sort of comfortable with. Very surface level however. What I wanted to do was so straightforward and easy but TypeScript just kept telling me "NO". I wound up having to make my own types in a `Food.types.ts` and I realized halfway through the project that the data given was nowhere near enough to create a fleshed out application.

I needed images and calorie info. With every change I made to the data I also had to make changes to the types I had set. Any rename/removal of types meant I had to go into my project and change every instance of it. The process was quite unpleasant.

Also I just want to discuss this

```js
function getRandom(currentArray) {
  return Math.floor(Math.random() * currentArray.length);
}
```

So here I am trying to create a function that can take an array and randomly return a number which exists in the array length. Now it's extremely straight forward in javascript as shown above. Typescript on the other hand...

```js
function getRandom(currentArray: Item[] | PricedItem[]) {
  return Math.floor(Math.random() * currentArray.length);
}
```

Because I am passing through arrays of two separate types the function goes crazy and won't compute unless the parameter type is specified. Moving on to when an array is mutated in the function and then returned you get a situation where, due to the parameter being either `Item[]` or `PricedItem[]` the output can also be either of those.

So you wind up with a situation like this

```js
let randomExtras: Item[] | PricedItem[] = getMultipleRandom(
    extras,
    amountOfExtras
);

(randomExtras as PricedItem[]).forEach((item) => {
    price += item.cost;
});
```

So here I need to specify that what is returned from `getMultipleRandom` is again either `Item[]` or `PricedItem[]`. But because it is being returned I need to ensure that the type of `randomExtras` matches. In this case the output needs to be of type `PricedItem[]` and since Typescript seems to default to the first type given, in this case `Item[]`, I needed to specify later on which type it actually is.

```js
randomExtras as PricedItem[]
```

It is a bit convoluted but in a way it was slightly satisfying. Creating a type and then having it be law in my code was a cathartic feeling I hadn't really experienced until then.

<a name="Functionality and Styling"></a>

## Randomization and Functionality

So as stated earlier in this post the task was to randomly generate a Chipotle meal. The how and look were completely open ended and up to me. Here was the criteria specified.

Requirements
`our current frontend stack (which has been initialized in this repo) each order must have 1 protein, bean & rice; everything else is all up to your random generator`

So with this information I proceeded to get to work on the randomization. I knew that there were items that I only needed to provide one of, but then you had things like toppings and extras. I'm sure people would want multiple toppings at the least. So that was essentially my most difficult task.

- Pick out a random item
- Pick out a random number of multiple random items

Solving the first problem was simple, just a `Math.floor` operation.

The second problem however was a bit tricky. I settled on this formula

```js
sortedArray = currentArray.sort(() => 0.5 - Math.random());

return sortedArray.slice(0, numberOfItems + 1);
```

The first line shuffles the array, rearranges it randomly. Then the second line grabs the random amount of items from that array by slicing.

The array shuffling is definitely not the best method, however in this context it works fine with such a small array of data. The method that many use and mention as being the best way is the **Fisher-Yates Shuffle** which is more mathematically correct and looks like this.

```js
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
```

As for styling it came fairly natural to me as I have been working with TailwindCSS for a while now. I simply went to Chipotle's website, saw they used brown and white as their main palette and I copied them. I tried to make my page look as similar in design without being a direct copy.

The final results can be seen here: https://daedadev.github.io/Chipotle-Meal/

<a name="Closing Thoughts"></a>

## Closing Thoughts

I had a lot of fun with this project, and after I shared it on linkedIn a lot of people liked it as well. The company I was applying to immediately sent me an offer after seeing this project and it makes me proud to know that my hard work has begun to pay off. I am really excited for the next steps in my life as a programmer!
