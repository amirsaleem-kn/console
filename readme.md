# Wrapper for NodeJs console

### Installation

```shell
npm i --save nodejs-console
```

### Introduction

This is a wrapper for NodeJS console object. This wrapper enables environment friendly consoles. You can restrict the printing of console statements based on the
environment values. Execution environment is retrieved by using `process.env.NODE_ENV`

### Usage

```js
// import the console from node_modules
import Console from "nodejs-console";

// create your own logging levels

// disable any console logs in production
// these are meant to be used in non-production environment only
const Info = Console({
    disableIn: ["production"] // disable logs in production env
})

const Print = Console({
    disableIn: [] // don't disable logs in any env, logs will work in all environments
});

// use any console methods using Info
Info.log("test") // prints "test" in non-production environment
Info.warn("This is a warning message") 

Warn.log("This is a warning content:", "some content")
```

### Console(config)

The first argument must be a configuration object. Here are the available options under config object:

- `disableIn` - a valid list of possible NodeJs environment strings available in your `process.env.NODE_ENV` variable. All calls to console.* will be disabled for the enviornments present in this list.