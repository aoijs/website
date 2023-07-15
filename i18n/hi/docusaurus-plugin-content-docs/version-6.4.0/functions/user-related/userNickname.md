---
title: '$userNickname'
description: '$userNickname will return a user''s nickname.'
id: userNickname
---

`$userNickname` will return a user's nickname.

## प्रोयोग

```php
$userNickname[guildID?;userID?;returnUser?]
```

## पैरामीटर्स

| फील्ड       | टाइप    | डिस्क्रिप्शन                                                                     |    चाहिए     |
| ----------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| guildID?    | integer | The ID of the guild.                                                             | असत्य (नहीं) |
| userID?     | integer | The ID of the user.                                                              | असत्य (नहीं) |
| returnUser? | boolean | Return the username <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will return your nickname, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'nickname',
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
