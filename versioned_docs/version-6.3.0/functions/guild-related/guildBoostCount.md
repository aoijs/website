---
title: $guildBoostCount
description: $guildBoostCount will return the guild's boost count.
id: guildBoostCount
---

`$guildBoostCount` will return the guild's boost count.

## Usage

```php
$guildBoostCount[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the amount of boosts a specific guild has:

```javascript
bot.command({
    name: 'guildBoostCount',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
