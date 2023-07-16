---
title: $guildDefaultMessageNotifications
description: '$guildDefaultMessageNotifications вернет указанный тип уведомления о сообщениях гильдии по умолчанию.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` вернет указанный по умолчанию тип уведомления о сообщениях гильдии.

## Использование

```php
$guildDefaultMessageNotifications[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернёт стандартный тип уведомлений о сообщениях гильдии:

```javascript
bot.command({
    name: 'guildDefaultMessageNotifications',
    code: `
  $guildDefaultMessageNotifications
  `
});
```
