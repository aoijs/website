---
title: '$userID'
description: '$userID will return a given user''s ID.'
id: usarioID
---

`$userID` will return a given user's ID.

## Modo de uso

```php
$userID[user]
```

## Parámetros

| Campo | Tipo           | Parámetros                                                       | Requerido |
| ----- | -------------- | ---------------------------------------------------------------- |:---------:|
| user  | cadena, número | The name of the user who you want the user ID to be returned of. | verdadera |

## Ejemplo(s)

This will return your user ID:

```javascript
bot.command({
    name: 'userID',
    code: `
  $userID[$username]
  `
});
```
