---
title: '$isSelfDeafened'
description: '$isSelfDeafened is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.'
id: isSelfDeafened
---

`$isSelfDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.

## الاستخدام

```php
$isSelfDeafened[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                          | مطلوب |
| -------- | ------- | ----------------------------------------------------- |:-----:|
| userID?  | Integer | ID of the user you want to check if they're deafened. | false |
| guildID? | Integer | ID of the guild where they're deafened in.            | false |

## مثال

This will return either `true` or `false` depending on if you're deafened or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
