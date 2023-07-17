---
title: '$deleteWebhook'
description: '$deleteWebhook удалит данный Webhook.'
id: deleteWebhook
---

`$deleteWebhook` удалит данный вебхук.

## Использование

```php
$deleteWebhook[webhookID;webhookToken]
```

## Параметры

| Название     | Nbg    | Описание       | Нужно |
| ------------ | ------ | -------------- |:-----:|
| webhookID    | целое  | ID вебхука.    |  да   |
| webhookToken | строка | Токен вебхука. |  да   |

## Пример(ы)

Это удалит вебхук вашей гильдии:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // замена полей, актуальной информации.
});
```