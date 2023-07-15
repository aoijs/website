---
title: '$isSelfDeafened'
description: '$isSelfDeafened is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.'
id: isSelfDeafened
---

`$isSelfDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.

## प्रोयोग

```php
$isSelfDeafened[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                          |    चाहिए     |
| -------- | ------- | ----------------------------------------------------- |:------------:|
| userID?  | integer | ID of the user you want to check if they're deafened. | असत्य (नहीं) |
| guildID? | integer | ID of the guild where they're deafened in.            | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if you're deafened or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
