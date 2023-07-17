---
title: $lowestRole
description: '$userLowestRole devolverá el rol más bajo de un usuario específico.'
id: lowestRole
---

`$userLowestRole` devolverá el rol más bajo de un usuario específico.

## Uso

```php
$userLowestRole[usarioID?;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                      | Requerido |
| ----------- | ------ | --------------------------------------------------------------- |:---------:|
| usarioID?   | entero | ID del usuario del que quieres que se devuelva el rol más bajo. |    no     |
| servidorID? | entero | ID del servidor.                                                |    no     |

## Ejemplo(s)

Esto devolverá el ID de su rol más bajo:

```javascript
bot.command({
    name: 'userLowestRole',
    code: `
  $userLowestRole[$authorID;$guildID]
  `
});
```
