---
title: '$guildIcon'
description: '$guildIcon will return the guild''s icon.'
id: guildIcon
---

`$guildIcon` will return the guild's icon.

## الاستخدام

```php
$guildIcon[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the icon of the guild:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
