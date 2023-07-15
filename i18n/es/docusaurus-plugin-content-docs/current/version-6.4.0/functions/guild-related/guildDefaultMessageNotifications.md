---
title: '$guildDefaultMessageNotifications'
description: '$guildDefaultMessageNotifications will return given guild''s default message notification type.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` will return given guild's default message notification type.

## Modo de uso

```php
$guildDefaultMessageNotifications[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the guild's default message notification type:

```javascript
bot.command({
    name: 'guildDefaultMessageNotifications',
    code: `
  $guildDefaultMessageNotifications
  `
});
```
