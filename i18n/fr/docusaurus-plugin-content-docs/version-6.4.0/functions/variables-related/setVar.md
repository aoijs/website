---
title: '$setVar'
description: '$setVar will change the value of a given global variable.'
id: setVar
---

`$setVar` will change the value of a given global variable.

## Usage

```php
$setVar[varname;value;table?]
```

## Parameters

| Field   | Type   | Description         | Required |
| ------- | ------ | ------------------- |:--------:|
| Varname | string | Variable name.      |   true   |
| Value   | string | New Variable value. |   true   |
| Table?  | string | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```