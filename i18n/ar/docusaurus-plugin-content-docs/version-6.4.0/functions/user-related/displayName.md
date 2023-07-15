---
title: '$displayName'
description: '$displayName will return the display name of a given user.'
id: displayName
---

`$displayName` will return the display name of a given user.

## الاستخدام

```php
$displayName[guildID?;userID?;returnUser?]
```

## البارامترات

| Field       | النوع   | الديسكبربشين                                              | مطلوب |
| ----------- | ------- | --------------------------------------------------------- |:-----:|
| guildID?    | Integer | The ID of the guild.                                      | false |
| userID?     | Integer | اي دي المستخدم.                                           | false |
| returnUser? | boolean | Return the username <br /> 1. true. false (default) | false |

## مثال

This will return your displayName, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'displayName',
    code: `
  $displayName[$guildID;$authorID;true]
  `
});
```
