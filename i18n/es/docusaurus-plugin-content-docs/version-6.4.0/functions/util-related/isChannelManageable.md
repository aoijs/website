---
title: '$isChannelManageable'
description: '$isChannelManageable comprobará si el canal es manejable o no.'
id: isChannelManageable
---

`$isChannelManageable` comprobará si el canal es manejable o no.

## Uso

```php
$isChannelManageable[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                 | Requerido |
| -------- | ------- | ---------------------------------------------------------- |:---------:|
| canalID? | integer | ID del canal para comprobar si el canal es manejable o no. |    no     |

## Ejemplo(s)

Esto devolverá `verdadero` o `falso` dependiendo de si el canal en el que estás ejecutando el comando es manejable:

```javascript
bot.command({
    name: 'isChannelManageable',
    code: `
  $isChannelManageable[$channelID]
  `
});
```
