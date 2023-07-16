---
title: '$vanityUses'
description: '$vanityUses devolverá los usos de una URL de vanidad.'
id: vanityUses
---

`$vanityUses` devolverá los usos de una URL de vanidad.

## Uso

```php
$vanityUses[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros       | Requerido |
| ----------- | ------- | ---------------- |:---------:|
| servidorID? | integer | ID del servidor. |    no     |

## Ejemplo(s)

Esto devolverá los usos de la URL de vanidad de su servidor, si tiene una:

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
