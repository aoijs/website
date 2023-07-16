---
title: '$isDM'
description: '$isDM comprobará si el canal dado es un DM o no.'
id: isDM
---

`$isDM` comprobará si el canal dado es un DM o no.

## Uso

```php
$isDM[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                        | Requerido |
| -------- | ------- | --------------------------------- |:---------:|
| canalID? | integer | ID del canal que desea comprobar. |    no     |

## Ejemplo(s)

Esto devolverá `verdadero` o `falso` dependiendo de si estás ejecutando el comando en un DM o no:

```javascript
bot.command({
    name: 'isDM',
    code: `
  $isDM[$channelID]
  `
});
```