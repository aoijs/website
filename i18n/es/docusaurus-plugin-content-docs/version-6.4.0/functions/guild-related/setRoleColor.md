---
title: '$setRoleColor'
description: '$setRoleColor establecerá el color de los roles.'
id: setRoleColor
---

`$setRoleColor` devolverá el color del rol dado.

## Uso

```php
$setRoleColor[rolID;color]
```

## Parámetros

| Campo | Tipo     | Parámetros                      | Requerido |
| ----- | -------- | ------------------------------- |:---------:|
| rolID | entero   | ID del rol que será modificado. | verdadero |
| color | consulta | El nuevo color (hex).           | verdadero |

## Ejemplo(s)

Esto cambiará el color de un rol aleatorio a rojo:

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;Red]`
});
```

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;ED4245]`
});
```