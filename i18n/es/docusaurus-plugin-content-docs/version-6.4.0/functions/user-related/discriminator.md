---
title: '$discriminator'
description: '$discriminator devolverá el discriminador de un usuario.'
id: discriminator
---

`$discriminator` devolverá un discriminador del usuario.

## Uso

```php
$discriminator[ID de usuario?]
```

## Parámetros

| Campo     | Tipo   | Parámetros                                                       | Requerido |
| --------- | ------ | ---------------------------------------------------------------- | --------- |
| usarioID? | entero | El ID del usuario del que desea que se devuelva el rol más alto. | falso     |

## Ejemplo(s)

Esto devolverá a su Discriminador de Usuario de Discord, por ejemplo `User#0000` (los cuatro dígitos):

```javascript
bot.command({
    name: 'discriminator',
    code: `
  $discriminator[$authorID] // tu discriminador
  $discriminator[$clientID] // el discriminador del bot
  `
});
```