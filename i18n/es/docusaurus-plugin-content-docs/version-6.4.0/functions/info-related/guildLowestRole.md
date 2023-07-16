---
title: '$guildLowestRole'
description: '$guildLowestRole devolverá el rol más bajo de un servidor específico.'
id: guildLowestRole
---

`$guildLowestRole` devolverá el rol más bajo de un servidor específico.

## Uso

```php
$guildLowestRole[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros       | Requerido |
| ----------- | ------- | ---------------- |:---------:|
| servidorID? | integer | ID del servidor. |    no     |

## Ejemplo(s)

Esto devolverá el ID del rol de servidor más bajo:

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```
