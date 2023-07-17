---
title: '$deafenUser'
description: '$deafenUser ensordecerá a un usuario.'
id: deafenUser
---

`$deafenUser` hará ensordecer a un usuario.

## Uso

```php
$deafenUser[ID de usuario;ensordecer?]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                                                                                 | Requerido |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------- |:---------:|
| usarioID   | entero   | El usuario que estará ensordecido o ensordecido.                                                           | verdadero |
| ensordecer | booleano | Sobretodo o desensordece al usuario dado. <br /> 1. **true** (por defecto) <br /> 2. **false** |   falso   |

## Ejemplo(s)

Esto te ensordecerá:

```javascript
bot.command({
    name: 'deafen',
    code: `
  $deafen[$authorID;true]
  `
});
```
