---
title: '$deafenUser'
description: '$deafenUser will deafen a user.'
id: deafenUser
---

`$deafenUser` will deafen a user.

## Uso

```php
$deafenUser[userID;deafen?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                                                      | Requerido |
| -------- | ------- | ----------------------------------------------------------------------------------------------- |:---------:|
| usarioID | entero  | The user who will be deafened or undeafened.                                                    | verdadero |
| deafen?  | boolean | Deafen or Undeafen the given user. <br /> 1. **true** (default) <br /> 2. **false** |    no     |

## Ejemplo(s)

This will deafen yourself:

```javascript
bot.command({
    name: 'deafen',
    code: `
  $deafen[$authorID;true]
  `
});
```
