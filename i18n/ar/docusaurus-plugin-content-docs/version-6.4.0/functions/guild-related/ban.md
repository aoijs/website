---
title: '$ban'
description: '$ban will ban a user of a given guild.'
id: ban
---

`$ban` will ban a user of a guild.

## الاستخدام

```php
$ban[guildID;userID;days?;reason?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                    | مطلوب |
| -------- | ------- | --------------------------------------------------------------- |:-----:|
| guildID? | Integer | From which guild the user should be banned from.                | true  |
| userID   | Integer | The user to ban.                                                | true  |
| days?    | string  | Days of message history to delete, cannot be higher than 7 days | false |
| reason?  | string  | The reason that will be displayed in the guild's audit logs.    | false |

## مثال

This will ban a random user of your guild:

```javascript
bot.command({
    name: 'ban',
    code: `
  $ban[$guildID;$randomUserID;7;Imagine getting banned.]
  `
});
```
