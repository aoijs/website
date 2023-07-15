---
title: '$guildBoostCount'
description: '$guildBoostCount will return the guild''s boost count.'
id: guildBoostCount
---

`$guildBoostCount` will return the guild's boost count.

## प्रोयोग

```php
$guildBoostCount[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the amount of boosts a specific guild has:

```javascript
bot.command({
    name: 'guildBoostCount',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
