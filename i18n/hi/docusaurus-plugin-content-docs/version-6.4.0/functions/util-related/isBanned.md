---
title: '$isBanned'
description: '$isBanned checks if a given user is banned in a specific guild.'
id: isBanned
---

`$isBanned` checks if a given user is banned in a specific guild.

## प्रोयोग

```php
$isBanned[guildID;userID]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन                                                  | चाहिए |
| ------- | ------- | ------------------------------------------------------------- |:-----:|
| guildID | integer | ID of the guild where to check if the user is banned or not.  | true  |
| userID  | integer | ID of the user that will be checked if they're banned or not. | true  |

## ट्रू (हा)

This will return `false` as you're not banned in this guild:

```javascript
bot.command({
    name: 'isBanned',
    code: `
  $isBanned[$guildID;$authorID]
  `
});
```
