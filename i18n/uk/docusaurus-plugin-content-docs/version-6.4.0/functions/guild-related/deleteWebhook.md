---
title: '$deleteWebhook'
description: '$deleteWebhook видалить заданий вебгак.'
id: deleteWebhook
---

`$deleteWebhook` видалить заданий вебхук.

## Використання

```php
$deleteWebhook[webhookID;webhookToken]
```

## Параметри

| Поле                    | Тип   | Опис          | Обов'язковий |
| ----------------------- | ----- | ------------- |:------------:|
| ідентифікатор webhookID | ціле  | ID вебгака.   |     так      |
| webhookToken            | рядок | Знак вебгака. |     так      |

## Приклад(и)

Це видалить вебхук вашого гільдії:

```javascript
bot.command({
    name: 'deleteWebhook',
    код: `
  $deleteWebhook[webhookID;webhookToken]
  ` // замінює поля, які фактична інформація.
});
```