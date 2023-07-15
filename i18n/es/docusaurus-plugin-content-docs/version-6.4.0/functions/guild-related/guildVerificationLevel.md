---
title: '$guildVerificationLevel'
description: '$guildVerificationLevel devolverá el recuento de potenciadores del gremio.'
id: guildVerificationLevel
---

`$guildVerificationLevel` devolverá el recuento de potenciadores del gremio.

## Uso

```php
$guildVerificationLevel[servidorID?]
```

## Parámetros

| Campo       | Tipo   | Descripción       | Requerido |
| ----------- | ------ | ----------------- |:---------:|
| servidorID? | entero | La ID del gremio. |    no     |

| Tipo |         |
| ---- | ------- |
| 0    | None    |
| 1    | Low     |
| 2    | Medium  |
| 3    | High    |
| 4    | Highest |

## Ejemplo(s)

Esto devolverá el nivel de verificación del gremio:

```javascript
bot.command({
    name: 'guildVerificationLevel',
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
