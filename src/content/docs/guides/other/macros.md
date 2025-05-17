---
title: Macros
description: Macros are reusable code blocks that can be inserted in other commands.
type: guide
id: macros
---

## Table of Contents

- [Macros](#macros)
- [Syntax](#syntax)
- [Usage](#usage)
- [Example](#example)

## Macros

**Macros** allow you to define reusable blocks of code that can be referenced using `#macroName` inside your commands, events, or even other macros. This helps to avoid repeating code and makes your bot code more organised.

## Syntax

To create a macro, use `<client>.macro()` and define a name and a code block.

```js
<client>.macro({
  name: "macroName",
  code: `aoi.js functions`
});
```

You can define multiple macros at once:

```js
<client>.macro(
  {
    name: "logmessage",
    code: `$log[Hello world!]`
  },
  {
    name: "onlyDevelopers",
    code: `$onlyIf[$authorID==123456789012345678;You are not a developer.]`
  }
);
```

## Usage

To use a macro, reference it with a `#` followed by its name:

```
#macroName
```

For example, using a macro named `logmessage`:

```
#logmessage
```

This will insert the code block defined in the macro at that point in your command or event.

## Example

Defining and using multiple macros:

```js
<client>.macro({
  name: 'logmessage',
  code: '$log[aoi.js bot just started c:]'
}, {
  name: 'onlyDevelopers',
  code: '$onlyIf[$authorID==918231238912839;You are not a developer.]'
});
```
```js
<client>.readyCommand({
  code: `
    #logmessage
    $log[Starting..]
  `
});
```
```js
<client>.command({
  name: "eval",
  code: `
    $eval[$message]
    #onlyDevelopers
  `
});
```
