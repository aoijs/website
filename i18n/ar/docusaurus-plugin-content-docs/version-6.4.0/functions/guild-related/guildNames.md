---
title: '$guildNames'
description: '$guildNames will return the guide names your bot is in.'
id: guildNames
---

`$guildNames` will return the guide names your bot is in.

## الاستخدام

```php
$guildNames[sep?]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                    | مطلوب |
| ----- | ------ | ----------------------------------------------- |:-----:|
| sep?  | string | Separator to separate multiple returned values. | false |

## مثال

This will return the names of the guilds your bot is in and separate it by a comma:

```javascript
bot.command({
    name: 'guildNames',
    code: `
  $guildNames[, ]
  `
});
```
