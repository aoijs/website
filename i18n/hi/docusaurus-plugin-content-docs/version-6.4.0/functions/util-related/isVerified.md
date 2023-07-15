---
title: '$isVerified'
description: '$isVerified checks if the given guild is verified by Discord.'
id: isVerified
---

`$isVerified` checks if the given guild is verified by Discord.

## प्रोयोग

```php
$isVerified[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                            |    चाहिए     |
| -------- | ------- | ----------------------------------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild where you want to check its verification status of. | असत्य (नहीं) |

## ट्रू (हा)

This will check if your server is verified and return either `true` or `false`:

```javascript
bot.command({
    name: 'isVerified',
    code: `
  $isVerified[$guildID]
  `
});
```
