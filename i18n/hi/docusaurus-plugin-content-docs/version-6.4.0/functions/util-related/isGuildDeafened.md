---
title: '$isGuildDeafened'
description: '$isGuildDeafened is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.'
id: isGuildDeafened
---

`$isGuildDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.

## प्रोयोग

```php
$isGuildDeafened[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                     |    चाहिए     |
| -------- | ------- | ---------------------------------------------------------------- |:------------:|
| userID?  | integer | The ID of the user you want to check if they're server deafened. | असत्य (नहीं) |
| guildID? | integer | The ID of the guild where they're server deafened in.            | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if you're server deafened or not:

```javascript
bot.command({
    name: 'isGuildDeafened',
    code: `
  $isGuildDeafened
  `
});
```
