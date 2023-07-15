---
title: '$userDefaultAvatar'
description: '$userDefaultAvatar will return the given user''s default Discord User Avatar.'
id: userDefaultAvatar
---

`$userDefaultAvatar` will return the given user's default Discord User Avatar.

## Modo de uso

```php
$userDefaultAvatar[userID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros         | Requerido |
| --------- | ------- | ------------------ |:---------:|
| usarioID? | integer | El ID del usuario. |    no     |

## Ejemplo(s)

This will return your default Discord User Avatar:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
