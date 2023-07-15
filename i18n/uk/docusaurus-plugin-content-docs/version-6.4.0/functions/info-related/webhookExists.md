---
title: '$webhookExists'
description: '$webhookExists will check if a given webhook exists.'
id: webhookExists
---

`$webhookExists` will check if a given webhook exists.

## Використання

```php
$webhookExists[id;token]
```

## Параметри

| Поле  | Тип     | Опис           | Обов'язковий |
| ----- | ------- | -------------- |:------------:|
| id    | integer | Webhook ID.    |     так      |
| token | рядок   | Webhook token. |     так      |

## Приклад(и)

This will check if the given Webhook Exists:

```javascript
bot.command({
    name: 'webhookExists',
    code: `
  $webhookExists[$splitText[1];$splitText[2]]
  $textSplit[$createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ];, ]
  `
});
```
