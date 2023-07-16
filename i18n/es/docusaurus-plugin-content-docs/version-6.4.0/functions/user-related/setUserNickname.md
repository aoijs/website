---
title: '$setUserNickname'
description: '$setUserNickname will change a nickname of a guild member.'
id: setUserNickname
---

`$setUserNickname` will change a nickname of a guild member.

## Uso

```php
$setUserNickname[userID;newName;reason?]
```

## Parámetros

| Campo    | Tipo           | Parámetros                                                      | Requerido |
| -------- | -------------- | --------------------------------------------------------------- |:---------:|
| usarioID | entero         | The user ID of the user whose nickname shall be changed.        | verdadero |
| newName  | cadena, número | Their new nickname.                                             | verdadero |
| ¿razón?  | cadena, número | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

This will change your nickname to "I love aoi.js": (wont work if you're the guild owner)

```javascript
bot.command({
    name: 'setUserNickname',
    code: `
  $setUserNickname[$authorID;I love aoi.js;They simply love aoi.js]
  `
});
```
