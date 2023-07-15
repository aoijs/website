---
title: '$isMuted'
description: '$isMuted will check if a specific user is muted within a voice channel.'
id: isMuted
---

`$isMuted` will check if a specific user is muted within a voice channel.

## प्रोयोग

```php
$isMuted[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                       | चाहिए |
| -------- | ------- | -------------------------------------------------- |:-----:|
| userID   | integer | ID of the user you want to check if they're muted. | true  |
| guildID? | integer | ID of the guild where the user is muted in.        | true  |

## ट्रू (हा)

This will check if you're currently muted in a voice channel and returns either `true` or `false`:

```javascript
bot.command({
    name: 'isMuted',
    code: `
  $isMuted[$authorID;$guildID]
  `
});
```
