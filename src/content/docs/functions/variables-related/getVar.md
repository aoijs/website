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

| Field   | Type   | Description     | Required |
| ------- | ------ | --------------- | :------: |
| varname | string | Variable name.  |   true   |
| table?  | string | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
  name: "getVar",
  code: `
    $getVar[Example;main]
    `,
});
```
