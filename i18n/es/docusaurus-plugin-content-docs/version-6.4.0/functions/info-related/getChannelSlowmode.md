---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode devolverá el modo pausado de un canal en segundos.'
id: getChannelSlowmode
---

`$getChannelSlowmode` devolverá el modo pausado de un canal en segundos.

## Uso

```php
$getChannelSlowmode[canalID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                              | Requerido |
| -------- | ------- | ----------------------------------------------------------------------- |:---------:|
| canalID? | integer | ID del canal del que quieres que se devuelva el modo pausado del canal. |    no     |

## Ejemplo(s)

Esto devolverá el modo pausado del canal en el que se ejecuta el comando:

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  El modo pausado del canal actual es: $getChannelSlowmode[$channelID] segundos
  `
});
```