---
title: '$isSelfMuted'
description: '$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.'
id: isSelfMuted
---

$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.

## الاستخدام

```php
$isSelfMuted[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                       | مطلوب |
| -------- | ------- | -------------------------------------------------- |:-----:|
| userID?  | Integer | ID of the user you want to check if they're muted. | false |
| guildID? | Integer | ID of the guild where they're muted in.            | false |

## مثال

This will return either `true` or `false` depending on if you're muted (voice channel) or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
