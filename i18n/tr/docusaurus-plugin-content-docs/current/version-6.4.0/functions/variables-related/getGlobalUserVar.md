---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar will return the value of a given global user variable.'
id: getGlobalUserVar
---

`$getGlobalUserVar` will return the value of a given global user variable.

## Usage

```php
$getGlobalUserVar[varname;userID?;table?]
```

## Parameters

| Field   | Type    | Description     | Required |
| ------- | ------- | --------------- |:--------:|
| varname | string  | Variable name.  |   true   |
| userID? | integer | User ID.        |  false   |
| table?  | string  | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```