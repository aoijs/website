---
title: '$guildDescription'
description: '$guildDescription devolverá la descripción del gremio.'
id: guildDescription
---

`$guildDescription` devolverá la descripción del gremio.

## Uso

```php
$guildDescription[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |   falso   |

## Ejemplo(s)

Esto devolverá la cantidad de potenciadores que tiene un gremio específico:

```javascript
bot.command({
    name: 'guildDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
