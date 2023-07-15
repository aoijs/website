---
title: '$createWebhook'
description: '$createWebhook will create a webhook.'
id: createWebhook
---

`$createWebhook` will create a webhook.

## Використання

```php
$createWebhook[channelID;name;avatar;reason;sep?]
```

## Параметри

| Поле      | Тип     | Опис                                                                                               | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer | Channel ID of where the webhook will be created in.                                                |     так      |
| назва     | рядок   | The webhook's display name.                                                                        |     так      |
| avatar    | рядок   | The webhook avatar url.                                                                            |     так      |
| reason    | рядок   | Reason which will be displayed in the guild's audit logs.                                          |     так      |
| sep?      | рядок   | The separator which will be used to separate important credentials like token and ID, default `,`. |      ні      |

## Приклад(и)

This will create a webhook in the current channel:

```javascript
bot.command({
    name: 'createWebhook',
    code: `
  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ]
  `
});
```
