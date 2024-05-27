---
title: $argsCount
description: $argsCount will return the amount of given arguments.
id: argsCount
---

`$argsCount` will return the amount of given arguments.

## Usage

```aoi
$argsCount
```

## Example(s)

This will return the amount of arguments in your message, for example, `[prefix]argsCount Hello Bye` will return two:

```javascript
client.command({
    name: "argsCount",
    code: `
  $argsCount
  `
});
```
