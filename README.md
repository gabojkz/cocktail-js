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
<script src="./cocktail.min.js"></script>
```

## Usage example

```javascript
const client = new Cocktail();

cocktail.getDrink('margarita')
  .then(console.log)
  .catch(console.log)
```

ISC License (ISC)