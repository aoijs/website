---
title: '$unban'
description: '$unban will unban a given user.'
id: unban
---

`$unban` will unban a given user.

## الاستخدام

```php
$unban[guildID;userID;reason?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                               | مطلوب |
| ------- | ------- | -------------------------------------------------------------------------- |:-----:|
| guildID | Integer | The guild ID of where the user is banned in.                               | true  |
| userID  | Integer | The ID of the user which will be unbanned.                                 | true  |
| reason? | string  | The reason for the unban that will be displayed in the guild's audit logs. | false |

## مثال

This will unban a given user:

```javascript
bot.command({
    name: 'unban',
    code: `
  $unban[$guildID;$randomUserID;Some reason.]
  `
});
```