---
title: '$guildDefaultMessageNotifications'
description: '$guildDefaultMessageNotifications поверне типовий тип сповіщення для повідомлень гільдії.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` поверне типовий тип сповіщення гільдії.

## Використання

```php
$guildDefaultMessageNotifications[guildID?]
```

## Параметри

| Поле     | Тип  | Опис        | Обов'язковий |
| -------- | ---- | ----------- |:------------:|
| гільдія? | ціле | ID гільдії. |      ні      |

## Приклад(и)

Це поверне типовий тип сповіщення гільдії:

```javascript
bot.command({
    name: 'guildDefaultMessageNotifications',
    код: `
  $guildDefaultMessageNotifications
  `
});
```
