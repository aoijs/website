---
title: '$isGuildDeafened'
description: '$isGuildDeafened is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.'
id: isGuildDeafened
---

`$isGuildDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.

## الاستخدام

```php
$isGuildDeafened[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                     | مطلوب |
| -------- | ------- | ---------------------------------------------------------------- |:-----:|
| userID?  | Integer | The ID of the user you want to check if they're server deafened. | false |
| guildID? | Integer | The ID of the guild where they're server deafened in.            | false |

## مثال

This will return either `true` or `false` depending on if you're server deafened or not:

```javascript
bot.command({
    name: 'isGuildDeafened',
    code: `
  $isGuildDeafened
  `
});
```
