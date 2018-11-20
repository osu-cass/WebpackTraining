# What is Webpack, and why do we need it?

## What and why

Webpack is a JavaScript and WebAssembly **bundler**. It takes a whole bunch of JS modules or other files, and sucks them up like a straw into (most commonly) a single JS file. This provides us with a number of benefits for our project:

### ES (ECMAScript) Modules Support

As a project grows, the codebase becomes increasingly large and more complex, as you might expect. At a certain point, it's unreasonable to keep all of your functions in the global namespace of a webpage. How are you even going to remember all of those function names anyways? That's why ES modules were proposed and implemented. [Mozilla has a great explainer on what ES modules are, how they work, and why they came around](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/).

Unfortunately, browser support for ES modules isn't guaranteed. So, Webpack fixes that issue by turning ES modules into a form that is usable in practically any browser environment. With this feature, Webpack allows us to leverage this superior way of organizing our code, without having to worry about browser support.

### Source Code Compilation

Webpack isn't limited to just JS and WASM. We have the concept of **Webpack loaders**, which allow us to process basically _any_ file. Whether that's CSS, Typescript, Markdown, PNGs, or even font files, Webpack can handle it using a loader of some sort. This is supremely powerful, since it allows us to use a single tool to handle the transformation of development code to production code.

### Source Code Optimization

Once your source code has been compiled, Webpack also enables us to perform addition processing and optimization through **Webpack extensions**. For example, Webpack can minify our JS code (the practice of removing all unnecessary whitespace), which will significantly reduce the size of our output bundle. We could also obfuscate our code, making it more difficult to read. Webpack is even capable of [tree-shaking (AKA dead code elimination)](https://en.wikipedia.org/wiki/Dead_code_elimination) and many other optimizations through extensions.

## Other Options

Webpack isn't the only bundler out there. There are two main alternatives:

- [Parcel](https://parceljs.org)
  - Parcel focuses less on extensibility and more on developer experience and ease-of-use; simply point at an HTML file, and Parcel will traverse all of its `script` and `link` tags, bundling dependencies as they're requested.
- [Rollup](https://rollupjs.org/guide/en)
  - Rollup emphasizes the use of ES modules and modern practices to the max — you need a plugin in order to process CommonJS modules, unlike Webpack and Parcel. But, with that in mind, Rollup is highly performant, and produces sane, readable output. Rollup is also the package that popularized the concept of tree-shaking.

Why do we use Webpack instead of these other options? Two things:

1. Parcel is a new face to the world of bundlers. It simply wasn't around when we started many of our projects.
2. Rollup is fast, but it doesn't have nearly the level of corporate and community support as Webpack does.

From a business point of view, Webpack is the best option for CASS. It's possible that we'll use Parcel for some projects in the future, but it's important to understand Webpack today for all of our existing projects.

## Next Steps

Now that you have a general idea of what Webpack is and why we use it, let's move on to how you can get started using it.
