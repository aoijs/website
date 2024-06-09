---
title: $setUserVar
description: $setUserVar will change the value of a given user variable.
id: setUserVar
---

`$setUserVar` will change the value of a given user variable.

## Usage

```aoi
$setUserVar[varname;value;userID?;id?;table?]
```

## Parameters

| Field   | Type                                                                                              | Description                               | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.                            |   true   |
| value   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New Variable value.                       |   true   |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | User ID.                                  |  false   |
| id?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | 1. **specific guild id** <br /> 2. **dm** |  false   |
| table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.                           |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
    name: "setUserVar",
    code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```
