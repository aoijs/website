---
title: '$guildID'
description: '$guildID will return the guild ID of a given guild.'
id: guildID
---

`$guildID` will return the guild ID of a given guild.

## الاستخدام

```php
$guildID[name?]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                      | مطلوب |
| ----- | ------ | ------------------------------------------------- |:-----:|
| name? | string | The guild name you want the ID to be returned of. | false |

## مثال

This will return your guild ID:

```javascript
bot.command({
    name: 'guildID',
    code: `
  $guildID
  `
});
```
