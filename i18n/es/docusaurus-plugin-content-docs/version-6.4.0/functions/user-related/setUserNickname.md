---
title: '$setUserNickname'
description: '$setUserNickname cambiará un nick de un miembro del gremio.'
id: setUserNickname
---

`$setUserNickname` cambiará el apodo de un miembro del gremio.

## Uso

```php
$setUserNickname[usuarioID;nuervo nombre;razon?]
```

## Parámetros

| Campo       | Tipo           | Parámetros                                                                 | Requerido |
| ----------- | -------------- | -------------------------------------------------------------------------- |:---------:|
| usarioID    | entero         | El identificador de usuario del usuario cuyas reacciones serán eliminadas. | verdadero |
| nuevoNombre | cadena, número | El nuevo apodo.                                                            | verdadero |
| ¿razón?     | cadena, número | Razón que se mostrará en los registros de auditoría del gremio.            |   falso   |

## Ejemplo(s)

Esto cambiará tu apodo a "I love aoi.js": (no funcionará si eres el propietario de la hermandad)

```javascript
bot.command({
    name: 'setUserNickname',
    code: `
  $setUserNickname[$authorID;I love aoi.js;They simply love aoi.js]
  `
});
```
