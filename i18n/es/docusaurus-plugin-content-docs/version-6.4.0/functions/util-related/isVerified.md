---
title: $isVerified
description: '$isVerified comprueba si la guild dada es verificada por Discord.'
id: isVerified
---

`$isVerified` comprueba si la guild dada es verificada por Discord.

## Uso

```php
$isVerified[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                           | Requerido |
| ----------- | ------- | -------------------------------------------------------------------- |:---------:|
| servidorID? | integer | El ID del gremio al que quieres comprobar su estado de verificación. |    no     |

## Ejemplo(s)

Esto comprobará si tu servidor está verificado y devolverá `verdadero` o `falso`:

```javascript
bot.command({
    name: 'isVerified',
    code: `
  $isVerified[$guildID]
  `
});
```
