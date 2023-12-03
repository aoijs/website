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

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the amount of boosts a specific guild has:

```javascript
client.command({
  name: "guildBoostCount",
  code: `
  $guildBoostCount[$guildID]
  `
});
```
