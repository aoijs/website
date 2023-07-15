---
title: '$memberAvatar'
description: '$memberAvatar will return the profile picture of a guild member.'
id: memberAvatar
---

`$memberAvatar` will return the profile picture of a guild member.

## प्रोयोग

```php
$memberAvatar[guildID?;userID?;size?;dynamic?;format?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | -------- | ----------------------------------------------- |:------------:|
| guildID? | integer  | The ID of the guild.                            | असत्य (नहीं) |
| userID?  | integer  | The ID of the user.                             | असत्य (नहीं) |
| size?    | integer  | The size of the image.                          | असत्य (नहीं) |
| dynamic? | boolean  | 1. **true** (default) <br /> 2. **false** | असत्य (नहीं) |
| format?  | स्ट्रिंग | Image format.                                   | असत्य (नहीं) |

## ट्रू (हा)

This will return your profile picture:

```javascript
bot.command({
    name: 'memberAvatar',
    code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `
});
```
