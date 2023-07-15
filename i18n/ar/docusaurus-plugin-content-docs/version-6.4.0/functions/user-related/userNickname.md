---
title: '$userNickname'
description: '$userNickname will return a user''s nickname.'
id: userNickname
---

`$userNickname` will return a user's nickname.

## الاستخدام

```php
$userNickname[guildID?;userID?;returnUser?]
```

## البارامترات

| Field       | النوع   | الديسكبربشين                                              | مطلوب |
| ----------- | ------- | --------------------------------------------------------- |:-----:|
| guildID?    | Integer | The ID of the guild.                                      | false |
| userID?     | Integer | اي دي المستخدم.                                           | false |
| returnUser? | boolean | Return the username <br /> 1. true. false (default) | false |

## مثال

This will return your nickname, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'nickname',
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
