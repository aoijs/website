---
title: '$randomText'
description: '$randomText retornará una palabra al azar de la consulta dada'
id: randomText
---

`$randomText` retornará una palabra aleatoria de la consulta dada

## Uso

```php
$randomText[text;text;...]
```

## Parámetros

| Campo | Tipo   | Parámetros                                                        | Requerido |
| ----- | ------ | ----------------------------------------------------------------- |:---------:|
| text  | string | Cualquier palabra/frase/letras que quieras que se elijan al azar. | verdadera |

## Ejemplo(s)

Esto devolverá un texto aleatorio de `Hola, Bye, Goodnight, See you`:

```javascript
bot.command({
    name: 'randomText',
    code: `
  $randomText[Hello;Bye;Goodnight;See you]
  `
});
```
