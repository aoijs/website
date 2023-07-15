---
title: '$deleteInvite'
description: '$deleteInvite will delete a specific guild invite.'
id: deleteInvite
---

`$deleteInvite` will delete a specific guild invite.

## प्रोयोग

```php
$deleteInvite[guildID;inviteCode;reason?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                              |    चाहिए     |
| ---------- | -------- | --------------------------------------------------------- |:------------:|
| guildID    | integer  | The guild ID whose invite should be deleted.              |     true     |
| inviteCode | स्ट्रिंग | The specific invite code.                                 |     true     |
| reason?    | स्ट्रिंग | Reason which will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will delete an invite (wont work as the invite code doesn't exist):

```javascript
bot.command({
    name: 'deleteInvite',
    code: `
  $deleteInvite[$guildID;ifawd9a;Testing!]
  `
});
```