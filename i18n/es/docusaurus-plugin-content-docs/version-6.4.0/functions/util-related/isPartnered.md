---
title: $isPartnered
description: '$isPartnered comprueba si el gremio dado está asociado con Discord.'
id: isPartnered
---

`$isPartnered` comprueba si el gremio dado está asociado con Discord.

## Uso

```php
$isPartnered[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                            | Requerido |
| ----------- | ------- | --------------------------------------------------------------------- |:---------:|
| servidorID? | integer | El ID del gremio al que quieres comprobar el estado de su asociación. | verdadera |

## Ejemplo(s)

Esto comprobará si tu servidor está asociado y devolverá `verdadero` o `falso`:

```javascript
bot.command({
    name: 'isPartnered',
    code: `
  $isPartnered[$guildID]
  `
});
```
