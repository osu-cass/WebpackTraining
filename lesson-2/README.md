# Getting Started

In this lesson, we'll work on getting a basic Hello World-esque project set up. Following along in some directory of your choice.

## Starting the Project

Since Webpack is heavily tied to JavaScript and NodeJS, it is distributed as an NPM module. Since our directory is fresh, we'll start off by initiating our project in a CLI:

```sh
# Initiate an NPM project
npm init
```

Answer all of the resulting prompts; it doesn't really matter what you put in any of them, for the purposes of this tutorial. This will create a file named `package.json` that looks something like this with a few extra keys:

```json
{
  "name": "webpack-training",
  "version": "1.0.0",
  "description": "webpack wut",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## Installing Webpack

Next, we'll get Webpack added to the project using the following command:

```sh
# Install Webpack core and CLI
npm install --save-dev webpack webpack-cli
```

Note the `--save-dev` flag. This tells NPM to install Webpack to the `devDependencies` block of the `package.json`. This is a semi-formal way of denoting that Webpack isn't actually a dependency that the code will load and utilize in production; instead, we'll only use it as a supplemental tool to build the application.

At this point, take another look at your `package.json`. It should have changed like this:

```diff
  {
    "name": "webpack-training",
    "version": "1.0.0",
    "description": "webpack wut",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
-   }
+   },
+   "devDependencies": {
+     "webpack": "^4.26.0",
+     "webpack-cli": "^3.1.2"
+   }
  }
```

> There will also be a `package-lock.json` at the root of the project. Read more about this lockfile [here](https://docs.npmjs.com/files/package-lock.json), and _don't delete it_. Not that there's any consequence to this tutorial, but a best practice is a best practice.

## Project Structure

Next, let's set up the project structure.

```sh
# Create a src directory
mkdir src

# Create an entry JS file
touch src/index.js

# Create a dist directory
mkdir dist

# Create an HTML entrypoint
touch dist/index.html
```

With those commands, you have the basic setup for a Webpacked project. Your file structure should look something like this:

```text
.
├── dist
│   └── index.html
├── node_modules
│   └── some stuff...
├── package-lock.json
├── package.json
└── src
    └── index.js
```

> The `src/` and `dist/` directories are a common convention in web development projects. `src/` contains the source code for the project, and `dist/` contains the compiled/transpiled output from Webpack or whatever build system the project implements. `dist/` should almost always be excluded from source control.

## Project Code

Now, let's insert some code into those files we created.

```js
// src/index.js
document.getElementById('text').innerHTML = '<p>Hello world!</p>'
```

```html
<!-- dist/index.html -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Webpack Training</title>
  </head>
  <body>
    <div id="text"></div>
    <script src="main.js"></script>
  </body>
</html>
```

Now we have something to Webpack, and a way to visualize that it's working.

## Running Webpack

Now, the next thing we have to do is use Webpack! There are a couple different ways which will net you the same result.

### The One-Off Way

If you only need to run Webpack once, you can use `npx` — read more about this tool [here](https://www.npmjs.com/package/npx). Long story short: `npx` finds a specified command from the files in the `node_modules/` directory, and if it can't find it, it'll install the NPM package by the same name temporarily. The following command will bundle our contrived example:

```sh
# Run Webpack
npx webpack
```

### The Recommended Way

`npx` doesn't work so well when you have a number of people on the team, and some times, you're going to want to run multiple commands at the same time. For this purpose, we have [NPM scripts](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633). You'll see these in most NPM and NodeJS projects.

Let's add a build script to our project, modifying `package.json`:

```diff
  {
    "name": "webpack-training",
    "version": "1.0.0",
    "description": "webpack wut",
    "main": "index.js",
    "scripts": {
-     "test": "echo \"Error: no test specified\" && exit 1"
+     "bundle": "webpack"
    },
    "devDependencies": {
      "webpack": "^4.26.0",
      "webpack-cli": "^3.1.2"
    }
  }
```

Then, run the script:

```sh
# Run Webpack
npm run bundle
```

## Looking at the Output

Both of the methods above result in the creation of a new file, `dist/main.js`. The contents should look something like this:

```text
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.getElementById("text").innerHTML="<p>Hello world!</p>"}]);
```

Beautiful, huh? That's our bundled application. To see your wonderful work, I recommend using the [`serve`](https://www.npmjs.com/package/serve) module. Let's take a look:

```sh
# Launch a web server and copy the URL to the clipboard
npx serve dist
```

Now, open up a web browser, paste in the URL, and see your work in action!

And there you go — You've Webpacked a project! We won't really see the benefits of Webpack with an application this small — let's add a dependency to see where Webpack shines.

## Adding dependencies

Let's use [Lodash ES](https://lodash.com) as an example dependency. First, install it:

```sh
# Add Lodash as a dependency
npm install lodash-es
```

Next, we'll use it in our `src/index.js` file:

```diff
+ import { shuffle } from 'lodash-es'
+
+ const jumble = shuffle('Hello world!'.split(''))
- document.getElementById('text').innerHTML = '<p>Hello world!</p>'
+ document.getElementById('text').innerHTML = `<p>${jumble.join('')}</p>`
```

Then, we bundle the new app:

```sh
# Using npx
npx webpack

# Or, using NPM scripts
npm run bundle
```

Scan through the output in your console and see where you can find the size of `main.js` — it should be somewhere around 5~6kb. Compare that to the [bundled size of `lodash-es`](https://bundlephobia.com/result?p=lodash-es@4.17.11), and you'll notice that our output is way smaller. That's because Webpack has engaged in tree-shaking, and didn't bother to include the parts of `lodash-es` that we're not using. The end result: a JS bundle that contains _only the code we need_, and runs in all browsers!

## Watch Mode

We're almost done with the first lesson! The last thing you should know about using the Webpack CLI is the watch mode, which re-compiles your JS bundle whenever your source files change. Let's run through what that looks like.

First, we need to start Webpack in watch mode:

```sh
# Start Webpack with the --watch flag
npx webpack --watch
```

Let that continue running, and open up a new CLI. We'll serve up the contents of `dist/` so you can see what's going on:

```sh
# Launch serve
npx serve dist
```

Open up the webpage in your browser of choice so you can view what the application looks like currently. When you're ready, edit `src/index.js` so the output is all vaporwave and stuff:

```diff
  import { shuffle } from 'lodash-es'

  const jumble = shuffle('Hello world!'.split(''))
- document.getElementById('text').innerHTML = `<p>${jumble.join('')}</p>`
+ document.getElementById('text').innerHTML = `<p style="color: deeppink;">${jumble.join(' ~ ')}</p>`
```

Head back to your browser and refresh the page — you should see your changes right away! This is a far better development experience than having to run the Webpack command whenever you make a change.

In the long run, we suggest adding an NPM script for running Webpack with the watch flag:

```diff
  {
    "name": "webpack-training",
    "version": "1.0.0",
    "description": "webpack wut",
    "main": "index.js",
    "scripts": {
-     "bundle": "webpack"
+     "bundle": "webpack",
+     "watch": "webpack -w"
    },
    "devDependencies": {
      "webpack": "^4.26.0",
      "webpack-cli": "^3.1.2"
    }
  }
```

That way, when someone needs to work on your project, all they need to do is sit down and run `npm run watch` once.

## Conclusion

Now you know, at least at a basic level, the bare minimum you need to get up and running with Webpack. In the next lesson, we'll break down how to configure Webpack.
