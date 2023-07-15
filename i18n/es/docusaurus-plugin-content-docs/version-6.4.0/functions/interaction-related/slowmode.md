---
title: '$slowmode'
description: '$slowmode cambiará el modo lento de un canal.'
id: slowmode
---

`$slowmode` cambiará el modo lento de un canal.

## Uso

```php
$slowmode[tiempo;canalID?]
```

## Parámetros

| Campo    | Tipo           | Parámetros                         | Requerido |
| -------- | -------------- | ---------------------------------- |:---------:|
| tiempo   | cadena, número | El nuevo nombre del canal clonado. | verdadero |
| canalID? | entero         | El ID del canal que se modificará. |    no     |

Esto tiene un tiempo máximo de 21600000 segundos (6 horas).

## Ejemplo(s)

Esto cambiará el modo lento del canal a tres minutos:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[3m;$channelID]`
});
```

Esto cambiará el modo lento del canal a 6 horas:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[6h;$channelID]`
});
```