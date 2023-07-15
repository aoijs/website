---
title: '$guildBoostLevel'
description: '$guildBoostLevel will return the guild''s boost level.'
id: guildBoostLevel
---

`$guildBoostLevel` will return the guild's boost level.

## Usage

```php
$guildBoostLevel[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- |:--------:|
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the boost level of a specific guild:

```javascript
bot.command({
    name: 'guildBoostLevel',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
