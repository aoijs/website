---
title: $isVariableExist
description: $isVariableExist checks if a given variable exists in a given table.
id: isVariableExist
---

`$isVariableExist` checks if a given variable exists in a given table.

## Usage

```php
$isVariableExist[variable;table?]
```

## Parameters

| Field    | Type                                                                                              | Description        | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------ | :------: |
| variable | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The variable name. |   true   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The table name.    |  false   |

## Example(s)

This will either true or false depending on if a variable called `Example` exists:

```javascript
client.command({
    name: "isVariableExist",
    code: `
  $isVariableExist[Example;main]
  `
});
```
