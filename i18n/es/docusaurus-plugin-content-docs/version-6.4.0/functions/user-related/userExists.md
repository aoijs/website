---
title: '$userExists'
description: '$userExists will check if a given user exists.'
id: userExists
---

`$userExists` will check if a given user exists.

## Uso

```php
$userExists[userID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros   | Requerido |
| --------- | ------- | ------------ |:---------:|
| usarioID? | integer | The user ID. |    no     |

## Ejemplo(s)

This will return either `true` or `false` depending on if the user exists, in this example below it will return `true` as you exist as Discord user:

```javascript
bot.command({
    name: 'userExists',
    code: `
  $userExists[$authorID]
  `
});
```
