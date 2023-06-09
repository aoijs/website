---
title: $lowestGuildRole
description: $lowestGuildRole will return the lowest role of a specific guild.
id: lowestGuildRole
---

`$lowestGuildRole` will return the lowest role of a specific guild.

## Usage

```php
$lowestGuildRole[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the ID of the lowest guild role:

```javascript
bot.command({
    name: 'lowestGuildRole',
    code: `
  $lowestGuildRole[$guildID]
  `
});
```
