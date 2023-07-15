---
title: '$isGuildMuted'
description: '$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.'
id: isGuildMuted
---

`$isGuildMuted` is similar but not to confuse with `$isMuted`, this will check if the user is server muted.

## प्रोयोग

```php
$isGuildMuted[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                  |    चाहिए     |
| -------- | ------- | ------------------------------------------------------------- |:------------:|
| userID?  | integer | The ID of the user you want to check if they're server muted. | असत्य (नहीं) |
| guildID? | integer | The ID of the guild where they're server muted in.            | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if you're server muted or not:

```javascript
bot.command({
    name: 'isGuildMuted',
    code: `
  $isGuildMuted[$authorID;$guildID]
  `
});
```
