---
title: '$argsSlice'
description: '$argsSlice dividirá el argumento dado según la entrada de los usuarios.'
id: argsSlice
---

`$argsSlice` cortará el argumento dado dependiendo de la entrada del usuario.

## Uso

```php
$argsSlice[texto;de?;a] 
```

## Parámetros

| Campo | Tipo   | Parámetros                              | Requerido |
| ----- | ------ | --------------------------------------- |:---------:|
| text  | cadena | Texto que quieres rebanar               | verdadero |
| De?   | número | Punto de inicio donde cortar el mensaje |   falso   |
| a     | número | Punto final donde termina la rebanada   | verdadero |

## Ejemplo(s)

Esto devolverá `Bye` y eliminará `.Hello` del valor dado:

```javascript
bot.command({
    name: 'slice',
    code: `
  $argsSlice[Hello Bye;1;5]
  `
});
```
