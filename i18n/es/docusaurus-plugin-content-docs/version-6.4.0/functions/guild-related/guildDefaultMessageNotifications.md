---
title: '$guildDefaultMessageNotifications'
description: '$guildDefaultMessageNotifications devolverá un tipo de notificación de mensaje predeterminado de gremio.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` devolverá un tipo de notificación de mensaje predeterminado de gremio.

## Uso

```php
$guildDefaultMessageNotifications[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

devolverá un tipo de notificación de mensaje predeterminado de gremio.

```javascript
bot.command({
    name: 'guildDefaultMessageNotifications',
    code: `
  $guildDefaultMessageNotifications
  `
});
```
