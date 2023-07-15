---
title: '$guildLowestRole'
description: '$guildLowestRole will return the lowest role of a specific guild.'
id: guildLowestRole
---

`$guildLowestRole` will return the lowest role of a specific guild.

## Usage

```php
$guildLowestRole[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- |:--------:|
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the ID of the lowest guild role:

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```
