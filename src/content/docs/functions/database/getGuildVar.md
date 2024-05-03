---
title: $getGuildVar
description: $getGuildVar will return the value of a given guild variable.
id: getGuildVar
---

`$getGuildVar` will return the value of a given guild variable.

## Usage

```php
$getGuildVar[varname;guildID?;table?]
```

## Parameters

| Field    | Type                                                                                              | Description     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------- | :------: |
| varname  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.  |   true   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID.       |  false   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
client.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```
