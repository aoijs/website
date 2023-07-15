---
title: '$guildDefaultMessageNotifications'
description: '$guildDefaultMessageNotifications will return given guild''s default message notification type.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` will return given guild's default message notification type.

## Використання

```php
$guildDefaultMessageNotifications[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the guild's default message notification type:

```javascript
bot.command({
    name: 'guildDefaultMessageNotifications',
    code: `
  $guildDefaultMessageNotifications
  `
});
```
