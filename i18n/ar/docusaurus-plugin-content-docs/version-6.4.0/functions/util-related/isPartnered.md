---
title: '$isPartnered'
description: '$isPartnered checks if the given guild is partnered with Discord.'
id: isPartnered
---

`$isPartnered` checks if the given guild is partnered with Discord.

## الاستخدام

```php
$isPartnered[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                     | مطلوب |
| -------- | ------- | ---------------------------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild you want to check its partnership status of. | true  |

## مثال

This will check if your server is partnered and return either `true` or `false`:

```javascript
bot.command({
    name: 'isPartnered',
    code: `
  $isPartnered[$guildID]
  `
});
```
