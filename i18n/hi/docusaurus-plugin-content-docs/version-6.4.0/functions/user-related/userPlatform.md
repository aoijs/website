---
title: '$userPlatform'
description: '$userPlatform will return the platform which the user is using Discord with.'
id: userPlatform
---

`$userPlatform` will return the platform which the user is using Discord with.

## प्रोयोग

```php
$userPlatform[userID?;guildID?;sep?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                  |    चाहिए     |
| -------- | -------- | --------------------------------------------- |:------------:|
| userID?  | integer  | ID of the user.                               | असत्य (नहीं) |
| guildID? | integer  | The guild ID of where the user is present in. | असत्य (नहीं) |
| sep?     | स्ट्रिंग | The separator to split multiple platforms.    | असत्य (नहीं) |

### Platforms:
- **web** - The user is currently using the web client.
- **mobile** - The user is using the mobile app.
- **desktop** - The user is using the desktop app.
- **none** - The user is either offline, or unable to fetch the platform.

## ट्रू (हा)

This will return your platform you're using Discord on:

```javascript
bot.command({
    name: 'userPlatform',
    code: `
  $userPlatform[$authorID;$guildID;, ]
  `
});
```
