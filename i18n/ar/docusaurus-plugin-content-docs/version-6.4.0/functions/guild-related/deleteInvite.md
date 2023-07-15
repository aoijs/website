---
title: '$deleteInvite'
description: '$deleteInvite will delete a specific guild invite.'
id: deleteInvite
---

`$deleteInvite` will delete a specific guild invite.

## الاستخدام

```php
$deleteInvite[guildID;inviteCode;reason?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                              | مطلوب |
| ---------- | ------- | --------------------------------------------------------- |:-----:|
| guildID    | Integer | The guild ID whose invite should be deleted.              | true  |
| inviteCode | string  | The specific invite code.                                 | true  |
| reason?    | string  | Reason which will be displayed in the guild's audit logs. | false |

## مثال

This will delete an invite (wont work as the invite code doesn't exist):

```javascript
bot.command({
    name: 'deleteInvite',
    code: `
  $deleteInvite[$guildID;ifawd9a;Testing!]
  `
});
```