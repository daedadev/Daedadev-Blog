---
title: "Project: Shopfront CMS - Part 3"
date: "March 17, 2022"
excerpt: "I overcame a very big roadblock in this project's creation. I am now able to program in my sleep. I have ascended."
sections: "Background/Description/Failures/Solution/Conclusion"
cover_image: "/images/posts/cmsPart1.png"
---

<a name="Background"></a>

## Background

Hi, I am back again with very heavy eyes and a lack of sleep. However I come with great news of a decent breakthrough that I have made. I had been banging my head against this problem for the past 2 days and at its inception seemed like something I could solve very easily.
<a name="Description"></a>

## Description

So here was the great all powerful problem that stumped me. I had a parent element which is a popup form taking in a prop from a fetch request. In that prop is an array of objects. I am mapping that nested array and returning children that populate that form.

Now to the problem. I have information in those children that can be edited by the user if they want. This edited information needs to be sent with the entirety of the form to update the information in the database.

- Dynamically generated children with information needed to be sent to the parent.
- Multiple outputs to single input

My initial mistake, which while on the right track, put me into a horrible loop. I immediately thought, so the array I need to create in the payload consists of the data in this child. I will pass a function to the child which will take in the child information as an argument. From there I can push the child information into a state array on the parent component.

1. Pass parent function to child as prop
2. Pass child information to parent through function
3. In function push child information into parent state array

Result? Failure. Or sort of a failure. Enough success to give me hope and keep me trying over and over again.
<a name="Failures"></a>

## Failures

So the output of my initial solution was an array of the children's information. However I was passing the information on form submission.

```
if(formSubmitted === true){
    sedInformationToParent(info)
}
```

This resulted in an array of the child props but doubled. So it was the correct input just not the correct output. However it was the fact that this output was so similar to what I had wanted that kept me from giving up on my thought process.
There were multiple problems that were possible in my mind.

- Function send handling. Maybe the bool was triggered for too long?
- Too many requests at once. Maybe the function was getting overloaded? The children would all send at the same time.
- Maybe Im an idiot. This shouldn't be this hard right?
  <a name="Solution"></a>

## Solution

So I ultimately woke up this morning tired and upset due to my shortcomings when it hit me that, no matter what, even if I got this working it wouldn't fit into a final version. I need to make a single request on form submission and making (what was at the time) 3 requests at once was not going to suffice.

Ultimately it was a single line of code that would wind up completely saving me.

```
setVariants((arr) => arr.splice(index, 1, variant));
```

It hit me that I needed to rely on the relationship between the parent and the child to correctly account for the data. How to do that? The index! By using the index of the actual child I could use that to edit the array of information that is being displayed.

SetVariants being an array of the current variants I have on the model.

I then called that line every time a variant was updated. So every input on change would run that function which would then update the state in real time. Now editing variants was not only dynamic but also completely separated from the submit function.
<a name="Conclusion"></a>

## Conclusion

Ultimately I understand that a better programmer could have easily solved this issue with little to no thinking, but for myself the fact that I triumphed over this problem makes me that much better of a programmer. I'm now looking at problems and thinking about refactoring code and looking at how things could possible be arranged differently.

Its a weird feeling. But I am sure that this project will be a great one for me and my development as a programmer, as a writer not so much.

Thank you for reading and until next time.
