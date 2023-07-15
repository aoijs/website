---
title: '$guildBoostLevel'
description: '$guildBoostLevel devolverá el recuento de potenciadores del gremio.'
id: guildBoostLevel
---

`$guildBoostLevel` devolverá el recuento de potenciadores del gremio.

## Uso

```php
$guildBoostLevel[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá la cantidad de potenciadores que tiene un gremio específico:

```javascript
bot.command({
    name: 'guildBoostLevel',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
