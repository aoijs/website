---
title: '$modifyWebhook'
description: '$modifyWebhook will modify a given webhook.'
id: modifyWebhook
---

`$modifyWebhook` will modify a given webhook.

## Використання

```php
$modifyWebhook[webhookID;name;avatar;channelID?;reason?]
```

## Параметри

| Поле       | Тип     | Опис                                                     | Обов'язковий |
| ---------- | ------- | -------------------------------------------------------- |:------------:|
| webhookID  | integer | The webhook ID to modify.                                |     так      |
| назва      | рядок   | New webhook name.                                        |     так      |
| avatar     | рядок   | New webhook avatar.                                      |     так      |
| channelID? | integer | ID of the channel where the webhook is located in.       |      ні      |
| reason?    | рядок   | Reason that will be displayed in the guild's audit logs. |      ні      |

## Приклад(и)

This will modify a existing webhook and change it's avatar to your user avatar:

```javascript
bot.command({
    name: 'modifyWebhook',
    code: `
  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]
  `
});
```