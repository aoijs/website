---
title: $botCount
description: $botCount will return the amount of Bots in your guild.
id: botCount
---

`$botCount` will return the amount of Bots in your guild.

## Usage

```php
$botCount[guildID?]
```

## Parameters

| Field    | Type    | Description                                                    | Required |
| -------- | ------- | -------------------------------------------------------------- | :------: |
| guildID? | integer | Guild ID of the guild you want to retrieve the amount of bots. |  false   |

## Example(s)

This will return the amount of bots in your guild:

```javascript
bot.command({
    name: 'botCount',
    code: `
  $botCount
  `
});
```