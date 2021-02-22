## Cocktail Library

> Boilerplate to create client libraries with rollup

## Overview

Using [rollup.js](https://rollupjs.org/guide/en/) to generate a javascript package
that can be imported with different methods

ESM 
```javascript
import Cocktail from "rollup-cocktail";
```
CJS
```javascript
const Cocktail = require("rollup-cocktail");
```
Browser
```javascript
<script src="https://cdn.jsdelivr.net/gh/gabojkz/cocktail-js@master/dist/cocktail.min.js"></script>
```

## Installation
```
npm i --save-dev rollup-cocktail @babel/polyfill
```

## Usage example

```javascript
const cocktail = new Cocktail();

cocktail.getDrink('margarita')
  .then(console.log)
  .catch(console.log)
```

ISC License (ISC)