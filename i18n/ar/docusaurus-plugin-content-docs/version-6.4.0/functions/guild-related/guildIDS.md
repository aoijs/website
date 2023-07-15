---
title: '$guildIDS'
description: '$guildIDS will return the ID of every guild your bot is in.'
id: guildIDS
---

`$guildIDS` will return the ID of every guild your bot is in.

## الاستخدام

```php
$guildIDS[sep?]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                        | مطلوب |
| ----- | ------ | --------------------------------------------------- |:-----:|
| sep?  | string | The separator to separate multiple returned values. | false |

## مثال

This will return all guild IDs your bot is in:

```javascript
bot.command({
    name: 'guildIDS',
    code: `
  $guildIDS[, ]
  `
});
```
