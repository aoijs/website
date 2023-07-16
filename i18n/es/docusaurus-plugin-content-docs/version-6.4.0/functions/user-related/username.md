---
title: '$username'
description: '$username will return a user''s username.'
id: nombre de usuario
---

`$username` will return a user's username.

## Uso

```php
$username[userID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros   | Requerido |
| --------- | ------- | ------------ |:---------:|
| usarioID? | integer | The user ID. |    no     |

## Ejemplo(s)

This will return your username:

```javascript
bot.command({
    name: 'username',
    code: `
  $username[$authorID]
  `
});
```
