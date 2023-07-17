---
title: '$isTimeout'
description: '$isTimeout comprobará si el usuario está en tiempo de espera con la función integrada de Discord.'
id: isTimeout
---

`$isTimeout` comprobará si el usuario está agotado con la función de tiempo de espera incorporada de Discord.

## Uso

```php
$isTimeout[guildID?;userID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                        | Requerido |
| ----------- | ------ | ------------------------------------------------- |:---------:|
| servidorID? | entero | El ID de la hermandad en donde se los deja pasar. |    no     |
| usarioID?   | entero | El ID del usuario que está agotado.               |    no     |

## Ejemplo(s)

Esto comprobará si estás esperado y devuelve `verdadero` o `falso`:

```javascript
bot.command({
    name: 'isTimeout',
    code: `
  $isTimeout[$guildID;$authorID]
  `
});
```
