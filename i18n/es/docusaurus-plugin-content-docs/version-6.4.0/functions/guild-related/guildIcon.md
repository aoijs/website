---
title: '$guildIcon'
description: '$guildIcon devolverá la descripción del gremio.'
id: guildIcon
---

`$guildIcon` devolverá la descripción del gremio.

## Uso

```php
$guildIcon[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros        | Requerido |
| ----------- | ------- | ----------------- |:---------:|
| servidorID? | integer | La ID del gremio. |   falso   |

## Ejemplo(s)

Esto devolverá el recuento de emoji de su servidor:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
