---
title: '$channelPermissionsFor'
description: '$channelPermissionsFor devolverá los permisos de canal de un usuario o rol específico.'
id: channelPermissionsFor
---

`$channelPermissionsFor` devolverá los permisos de un canal específico de un usuario o rol.

## Uso

```php
$channelPermissionsFor[ID de usuario o rol?;canalID?;sep?]
```

## Parámetros

| Campo                | Tipo   | Parámetros                                                                | Requerido |
| -------------------- | ------ | ------------------------------------------------------------------------- |:---------:|
| ID de usuario o rol? | entero | El usuario o el identificador de rol cuyos permisos serán devueltos.      | verdadero |
| canalID              | entero | El ID del canal del que deben devolverse los permisos.                    | verdadero |
| sep?                 | cadena | El separador que se utilizará para separar los permisos, por defecto ",". |   falso   |

## Ejemplo(s)

Esto devolverá el modo pausado del canal en el que se ejecuta el comando:

```javascript
bot.command({
    name: 'channelPermissionsFor',
    code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
