---
title: $mentionedRoles
description: '$mentionedRoles devolverá el ID de un rol recuperado de un mensaje, esto funciona como `$mentioned`.'
id: mentionedRoles
---

`$mentionedRoles` devolverá el ID de un rol recuperado de un mensaje.

## Uso

```php
$mentionedRoles[index]
```

## Parámetros

| Campo  | Tipo   | Parámetros               | Requerido |
| ------ | ------ | ------------------------ |:---------:|
| índice | número | El índice del argumento. | verdadera |

## Ejemplo(s)

Esto devolverá el ID de la **primera mención de rol** si intentas mencionar cualquier rol en este comando:

```javascript
bot.command({
    name: 'mentionedRoles',
    code: `
  $mentionedRoles[1]
  `
});
```
