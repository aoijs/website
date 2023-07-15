---
title: '$unban'
description: '$unban will unban a given user.'
id: unban
---

`$unban` will unban a given user.

## प्रोयोग

```php
$unban[guildID;userID;reason?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                               |    चाहिए     |
| ------- | -------- | -------------------------------------------------------------------------- |:------------:|
| guildID | integer  | The guild ID of where the user is banned in.                               |     true     |
| userID  | integer  | The ID of the user which will be unbanned.                                 |     true     |
| reason? | स्ट्रिंग | The reason for the unban that will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will unban a given user:

```javascript
bot.command({
    name: 'unban',
    code: `
  $unban[$guildID;$randomUserID;Some reason.]
  `
});
```