---
title: '$kick'
description: '$kick will remove a user from a given guild.'
id: kick
---

`$kick` will remove a user from a given guild.

## प्रोयोग

```php
$kick[guildID;userID;reason?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                  |    चाहिए     |
| ------- | -------- | ------------------------------------------------------------- |:------------:|
| guildID | integer  | The ID of the guild where the user shall be removed from.     |     true     |
| userID  | integer  | The ID of the user which will be removed from the guild.      |     true     |
| reason? | स्ट्रिंग | The reason which will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will kick someone from your guild:

```javascript
bot.command({
    name: 'kick',
    code: `
  <@$findMember[$message;false]> has been kicked!
  $kick[$guildID;$findMember[$message;false];Example reason!]
  `
});
```
