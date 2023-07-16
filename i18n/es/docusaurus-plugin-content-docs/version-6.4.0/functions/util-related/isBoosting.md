---
title: '$isBoosting'
description: '$isBoosting verificará si el usuario dado está impulsando el gremio dado.'
id: isBoosting
---

$isBoosting verificará si el usuario dado está impulsando el gremio dado.

## Uso

```php
$isBoosting[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                 | Requerido |
| ----------- | ------ | ---------------------------------------------------------- |:---------:|
| usarioID?   | entero | ID de usuario para comprobar si están optimizando.         |    no     |
| servidorID? | entero | El ID de la hermandad de donde han optimizado el servidor. |    no     |

## Ejemplo(s)

Esto devolverá `falso` o `verdadero` dependiendo de si optimizaste este servidor:

```javascript
bot.command({
    name: 'isBoosting',
    code: `
  $isBoosting[$authorID;$guildID]
  `
});
```
