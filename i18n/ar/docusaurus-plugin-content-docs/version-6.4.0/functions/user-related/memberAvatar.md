---
title: '$memberAvatar'
description: '$memberAvatar will return the profile picture of a guild member.'
id: memberAvatar
---

`$memberAvatar` will return the profile picture of a guild member.

## الاستخدام

```php
$memberAvatar[guildID?;userID?;size?;dynamic?;format?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                    | مطلوب |
| -------- | ------- | ----------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild.                            | false |
| userID?  | Integer | اي دي المستخدم.                                 | false |
| size?    | Integer | The size of the image.                          | false |
| dynamic? | boolean | 1. **true** (default) <br /> 2. **false** | false |
| format?  | string  | Image format.                                   | false |

## مثال

This will return your profile picture:

```javascript
bot.command({
    name: 'memberAvatar',
    code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `
});
```
