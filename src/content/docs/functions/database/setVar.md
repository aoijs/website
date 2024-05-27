---
title: $setVar
description: $setVar will change the value of a given global variable.
id: setVar
---

`$setVar` will change the value of a given global variable.

## Usage

```aoi
$setVar[varname;value;table?]
```

## Parameters

| Field   | Type                                                                                              | Description         | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| Varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.      |   true   |
| Value   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New Variable value. |   true   |
| Table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```
