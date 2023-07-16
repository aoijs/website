---
title: $editWebhookMessage
description: '$editWebhookMessage будет редактировать данное сообщение webhook.'
id: editWebhookMessage
---

`$editWebhookMessage` отредактирует данное сообщение webhook.

## Использование

```php
$editWebhookMessage[webhookID;webhookToken;messageID;content]
```

## Параметры

| Название     | Nbg    | Описание                         | Нужно |
| ------------ | ------ | -------------------------------- |:-----:|
| webhookID    | целое  | Идентификатор вебхука.           |  да   |
| webhookToken | строка | Токен вебхука.                   |  да   |
| ID сообщения | целое  | ID сообщения для редактирования. |  да   |
| контент      | строка | Содержимое нового сообщения.     |  да   |