---
title: $isMentioned
description: '$isMentioned comprueba si la consulta contiene una mención.'
id: isMentioned
---

`$isMentioned` comprueba si la consulta contiene una mención.

## Uso

```php
$isMentioned[query]
```

## Parámetros

| Campo    | Tipo   | Parámetros                                                      | Requerido |
| -------- | ------ | --------------------------------------------------------------- |:---------:|
| consulta | string | Donde desea comprobar si se ha mencionado un usuario/rol/canal. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` como te mencionaron en el mensaje:

```javascript
bot.command({
    name: 'isMtioned',
    code: `
  $isMentioned[<@$authorID>]
  `
});
```
