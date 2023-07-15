---
title: '$guildMFALevel'
description: '$guildMFALevel devolverá el recuento de potenciadores del gremio.'
id: guildMFALevel
---

`$guildMFALevel` devolverá el recuento de potenciadores del gremio.

## Uso

```php
$guildMFALevel[servidorID?]
```

## Parámetros

| Campo       | Tipo   | Descripción       | Requerido |
| ----------- | ------ | ----------------- |:---------:|
| servidorID? | entero | La ID del gremio. |    no     |

| Tipo |                                                                             |
| ---- | --------------------------------------------------------------------------- |
| 0    | El gremio tiene requisitos MFA/2FA para acciones de moderación desactivadas |
| 1    | El gremio tiene un requerimiento MFA/2FA para acciones de moderación        |

## Ejemplo(s)

Esto devolverá el nivel MFA del gremio:

```javascript
bot.command({
    name: 'guildMFALevel',
    code: `
  $guildMFALevel[$guildID]
  `
});
```
