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

| Field    | Type    | Description     | Required |
| -------- | ------- | --------------- | :------: |
| varname  | string  | Variable name.  |   true   |
| guildID? | integer | Guild ID.       |  false   |
| table?   | string  | Variable table. |  false   |

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
