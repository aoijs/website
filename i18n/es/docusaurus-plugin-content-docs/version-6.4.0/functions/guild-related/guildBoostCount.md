---
title: '$guildBoostCount'
description: '$guildBoostCount devolverá el recuento de potenciadores del gremio.'
id: guildBoostCount
---

`$guildBoostCount` devolverá el recuento de potenciadores del gremio.

## Uso

```php
$guildBoostCount[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |    no     |

## Ejemplo(s)

Esto devolverá la cantidad de potenciadores que tiene un gremio específico:

```javascript
bot.command({
    name: 'guildBoostCount',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
