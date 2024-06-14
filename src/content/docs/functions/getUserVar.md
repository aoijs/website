---
title: $getUserVar
description: $getUserVar will return the value of a given user variable.
id: getUserVar
---

`$getUserVar` will return the value of a given user variable.

## Usage

```aoi
$getUserVar[varname;userID?;id?;table?]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                               | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Variable name.                            |   true   |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | User ID.                                  |  false   |
| id?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | 1. **specific guild id** <br /> 2. **dm** |  false   |
| table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Variable table.                           |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
    name: "getUserVar",
    code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```
