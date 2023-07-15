---
title: '$userTag'
description: '$userTag will return a user''s username and discriminator.'
id: userTag
---

`$userTag` will return a user's username and discriminator.

## Modo de uso

```php
$userTag[userID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros   | Requerido |
| --------- | ------- | ------------ |:---------:|
| usarioID? | integer | The user ID. |    no     |

## Ejemplo(s)

This will return your username and discriminator:

```javascript
bot.command({
    name: 'userTag',
    code: `
  $userTag[$authorID]
  `
});
```
