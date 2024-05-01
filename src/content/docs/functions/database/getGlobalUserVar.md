---
title: $getGlobalUserVar
description: $getGlobalUserVar will return the value of a given global user variable.
id: getGlobalUserVar
---

`$getGlobalUserVar` will return the value of a given global user variable.

## Usage

```php
$getGlobalUserVar[varname;userID?;table?]
```

## Parameters

| Field   | Type                                                                                              | Description     | Required |
| ------- | ------------------------------------------------------------------------------------------------- | --------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.  |   true   |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | User ID.        |  false   |
| table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```
