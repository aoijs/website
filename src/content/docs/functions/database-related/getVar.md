---
title: $getVar
description: $getVar will return the value of a global variable.
id: getVar
---

`$getVar` will return the value of a global variable

## Usage

```php
$getVar[varname;table?]
```

## Parameters

| Field   | Type                                                                                              | Description     | Required |
| ------- | ------------------------------------------------------------------------------------------------- | --------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.  |   true   |
| table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
  name: "getVar",
  code: `
    $getVar[Example;main]
    `,
});
```
