---
title: '$isMuted'
description: '$isMuted will check if a specific user is muted within a voice channel.'
id: isMuted
---

`$isMuted` will check if a specific user is muted within a voice channel.

## الاستخدام

```php
$isMuted[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                       | مطلوب |
| -------- | ------- | -------------------------------------------------- |:-----:|
| userID   | Integer | ID of the user you want to check if they're muted. | true  |
| guildID? | Integer | ID of the guild where the user is muted in.        | true  |

## مثال

This will check if you're currently muted in a voice channel and returns either `true` or `false`:

```javascript
bot.command({
    name: 'isMuted',
    code: `
  $isMuted[$authorID;$guildID]
  `
});
```
