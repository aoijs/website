---
title: '$ban'
description: '$ban will ban a user of a given guild.'
id: ban
---

`$ban` will ban a user of a guild.

## प्रोयोग

```php
$ban[guildID;userID;days?;reason?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                    |    चाहिए     |
| -------- | -------- | --------------------------------------------------------------- |:------------:|
| guildID? | integer  | From which guild the user should be banned from.                |     true     |
| userID   | integer  | The user to ban.                                                |     true     |
| days?    | स्ट्रिंग | Days of message history to delete, cannot be higher than 7 days | असत्य (नहीं) |
| reason?  | स्ट्रिंग | The reason that will be displayed in the guild's audit logs.    | असत्य (नहीं) |

## ट्रू (हा)

This will ban a random user of your guild:

```javascript
bot.command({
    name: 'ban',
    code: `
  $ban[$guildID;$randomUserID;7;Imagine getting banned.]
  `
});
```
