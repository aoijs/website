---
title: '$isSelfMuted'
description: '$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.'
id: isSelfMuted
---

$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.

## प्रोयोग

```php
$isSelfMuted[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                       |    चाहिए     |
| -------- | ------- | -------------------------------------------------- |:------------:|
| userID?  | integer | ID of the user you want to check if they're muted. | असत्य (नहीं) |
| guildID? | integer | ID of the guild where they're muted in.            | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if you're muted (voice channel) or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
