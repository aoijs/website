---
title: '$isThread'
description: '$isThread comprobará si el canal dado es un hilo o no.'
id: isThread
---

`$isThread` comprobará si el canal dado es un hilo o no.

## Uso

```php
$isThread[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                        | Requerido |
| -------- | ------- | --------------------------------- |:---------:|
| canalID? | integer | ID del canal que desea comprobar. |    no     |

## Ejemplo(s)

Esto devolverá `true` o `false` dependiendo de si estás ejecutando el comando en un hilo:

```javascript
bot.command({
    name: 'isThread',
    code: `
  $isThread[$channelID]
  `
});
```