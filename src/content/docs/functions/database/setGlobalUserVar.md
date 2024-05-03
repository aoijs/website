---
title: $setGlobalUserVar
description: $setGlobalUserVar will change the value of a given global user variable.
id: setGlobalUserVar
---

`$setGlobalUserVar` will change the value of a given global user variable.

## Usage

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## Parameters

| Field   | Type                                                                                              | Description         | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.      |   true   |
| value   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New Variable value. |   true   |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | User ID.            |  false   |
| table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value" for the command author:

```javascript
client.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```
