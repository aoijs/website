---
title: '$vanityUses'
description: '$vanityUses will return the uses of a vanity URL.'
id: vanityUses
---

`$vanityUses` will return the uses of a vanity URL.

## الاستخدام

```php
$vanityUses[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the uses of your guild's vanity URL, if you have one:

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
