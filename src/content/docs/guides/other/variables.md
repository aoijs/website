---
title: Variables
description: This Guide will be covering variables, their usage and how to store variables in other files.
id: variables
og_image: /src/images/og/18.png
---

:::caution[Rework]

This page will be reworked in the future.

:::

This guide will provide you with a comprehensive understanding of variables.

### Using Variables

Variables are useful tools in programming that allow you to store values that can be accessed and manipulated throughout your code. To use a variable, you first need to declare it by giving it a name and assigning a value to it.

One way to do this is by using the following code snippet in your main file (usually named `index.js`):

```js
client.variables({
  variableName: boolean,
  variableName: number,
  variableName: object,
  variableName: "string",
}, table?);
```

The `client.variables()` function takes an object as an argument, where each property represents a variable name and its corresponding value. You can assign variables to a certain table. However, this is optional and will default to "main".

For example:

```js {8} title="index.js"
client.variables(
  {
    blacklisted: false,
    money: 0,
    developers: {},
    title: "none",
  },
  "main",
);
```

This also works:

```js title="index.js"
client.variables({
  blacklisted: false,
  money: 0,
  developers: {},
  title: "none",
});
```

---

## Variable Handlers

Another way to use variables is by using a variable handler, which can help keep your main file organized and cleaner. To set up a variable handler, follow these steps:

1. Create a directory called "**handler**".
2. Create a file inside the directory named "**variables.js**".
3. In your main file, add the following code:

```js
require("./handler/variables.js")(client);
```

4. In the `variables.js` file, create an array of objects, where each object represents a variable name and its corresponding value:

```js
module.exports = (client) => {
  client.variables({
    variableName: boolean,
    variableName: number,
    variableName: object,
    variableName: "string",
  }, table?);
};
```

For example:

```js title="handler/variables.js"
module.exports = (client) => {
  client.variables(
    {
      blacklisted: false,
      money: 0,
      developers: {},
      title: "none",
    },
    "main",
  );
};
```

This also works:

```js title="handler/variables.js"
module.exports = (client) => {
  client.variables({
    blacklisted: false,
    money: 0,
    developers: {},
    title: "none",
  });
};
```

With these steps, you now have a working variable handler, which can help you keep your code organized and easier to manage.
