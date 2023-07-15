---
title: '$deleteInvite'
description: '$deleteInvite will delete a specific guild invite.'
id: deleteInvite
---

`$deleteInvite` will delete a specific guild invite.

## Використання

```php
$deleteInvite[guildID;inviteCode;reason?]
```

## Параметри

| Поле       | Тип     | Опис                                                      | Обов'язковий |
| ---------- | ------- | --------------------------------------------------------- |:------------:|
| guildID    | integer | The guild ID whose invite should be deleted.              |     так      |
| inviteCode | рядок   | The specific invite code.                                 |     так      |
| reason?    | рядок   | Reason which will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will delete an invite (wont work as the invite code doesn't exist):

```javascript
bot.command({
    name: 'deleteInvite',
    code: `
  $deleteInvite[$guildID;ifawd9a;Testing!]
  `
});
```