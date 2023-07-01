---
title: $resetUserVar
description: $resetUserVar will set a given user variable to its default value of a given guild.
id: resetUserVar
---

`$resetUserVar` will set a given user variable to its default value of a given guild.

## Usage

```php
$resetUserVar[varname;guildID?;table?]
```

## Parameters

| Field    | Type    | Description     | Required |
| -------- | ------- | --------------- | :------: |
| varname  | string  | Variable name.  |  true    |
| guildID? | integer | Guild ID.       |  false   |
| table?   | string  | Variable table. |  false   |

## Example(s)

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```