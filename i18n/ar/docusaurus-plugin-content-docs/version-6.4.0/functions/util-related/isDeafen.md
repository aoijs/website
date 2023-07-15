---
title: '$isDeafen'
description: '$isDeafen will check if a certain user is deafened or not.'
id: isDeafen
---

`$isDeafen` will check if a certain user is deafened or not.

## الاستخدام

```php
$isDeafen[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                              | مطلوب |
| -------- | ------- | --------------------------------------------------------- |:-----:|
| userID?  | Integer | User ID you want to check if they're deafened,            | false |
| guildID? | Integer | The guild ID where you want to check if they're deafened. | false |

## مثال

This will return `false` or `true` depending on if you're currently deafened or not:

```javascript
bot.command({
    name: 'isDeafen',
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
