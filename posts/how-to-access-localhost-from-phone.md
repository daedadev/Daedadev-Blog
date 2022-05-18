---
title: "How To Access Localhost On Mobile"
date: "May 17 2022"
excerpt: "This is a short rundown on how to get your localhost on any device."
sections: "Background/ngrok/Setup/Usage/Npm Package/conclusion"
cover_image: "/images/posts/tutorial.PNG"
---

<a name="Background"></a>

## Background

So recently I came across a problem I had when styling my webpage. When viewing my deployed webpage on mobile I was noticing some very minor spacing issues with a border. The issues didn't appear on desktop however. Turns out the problem is due to a zoom that is only on mobile browsers. While on desktop I could recreate the issue by zooming in which would reveal the problem.

Trying to fix this became a huge pain because everytime I wanted to view it on mobile I had to build and deploy my project. The solution I found involves a program called ngrok.

<a name="ngrok"></a>

## About ngrok

This program exposes your localhost through their secure endpoints. Basically you open their application, specify which port you are hosting on, ie: 3000, 4000, 8080, then they host it on their servers and give you a link directly to it. This supports hot refreshing and the connections are very fast, close to actual localhost times.

<a name="Setup"></a>

## Setup

The setup for this application is also extremely easy. First thing you need to do is download ngrok, which you can do [here]('https://ngrok.com/download'). From there you'll want to choose your operating system of choice, or if you have Chocolatey installed use the command

`choco install ngrok`

I personally just downloaded the .zip file which is the install type I will be covering.

From here you'll need to sign up for an account to get your authorization token. This will connect and secure your routes with your account.

After signing up and signing into your account on the right hand bar under **Getting Started** you'll see a tab labeled **Your Authotoken**. Go into this tab and copy your token. From here open up your ngrok terminal and run

`ngrok config add-authtoken <Insert Token Here>`

Your token is saved for you in a config file which you can view by running `ngrok config edit` and from here you can confirm if your token has been added successfully or not.

<a name="Usage"></a>

## Usage

To use the program open up the ngrok.exe file to open up a new terminal. From here all you need to do is run the command

`ngrok.exe http <Your Localhost Port>`

The program will begin serving your localhost port and will provide you with a fairly convoluted web address. From there you just type in that address on any mobile device you would like and now you have your localhost on mobile.

To terminate your ngrok processes you can run the command `taskkill /f /im ngrok.exe` and this will ensure your ngrok ports are free.

<a name="Npm Package"></a>

## npm Package

There is also an npm package which you can experiment with using ngrok locally in your projects. This way you don't need to sign in but you'll still need to run through the process of setting up the connection.

Install ngrok
`npm install ngrok`

Setup ngrok connection

```js
const ngrok = require("ngrok");
(async function () {
  const url = await ngrok.connect();
})();
```

If you want to specify your authtoken

```js
await ngrok.connect({authtoken: token, ...});
```

To only specify the port

```js
const url = await ngrok.connect(9090);
```

To pass in multiple parameters in the connection

```js
const url = await ngrok.connect({
  proto: "http", // http|tcp|tls, defaults to http
  addr: 8080, // port or network address, defaults to 80
  authtoken: "12345", // your authtoken from ngrok.com
  region: "us", // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
  onStatusChange: (status) => {}, // 'closed' - connection is lost, 'connected' - reconnected
});
```

Look to the ngrok docs [here]('https://ngrok.com/docs#tunnel-definitions') to see more on tunnel definitions as well as other parameters.

There is a bunch more in the npm documentation [here]('https://www.npmjs.com/package/ngrok') which covers all of the ngrok npm package.

<a name="Conclusion"></a>

## Conclusion

So in this walkthrough I showed you how to set up your own global hosting for your localhost using ngrok. This allows you to view your production application in real time on any device.

I hope you all enjoyed and have an amazing day!
