---
title: '$mentionedUsersCount'
description: '$mentionedUsersCount devolverá la cantidad de menciones del usuario dentro de un mensaje.'
id: mentionedUsersCount
---

`$mentionedUsersCount` devolverá la cantidad de menciones de usuario dentro de un mensaje.

## Uso

```php
$mentionedUsersCount
```

## Ejemplo(s)

Esto devolverá la cantidad de menciones de usuario en el texto dado:

```javascript
bot.command({
    name: 'mentionedUsersCount',
    code: `
  Cantidad de palabras de usuario: $mentionedUsersCount
`
});
```
