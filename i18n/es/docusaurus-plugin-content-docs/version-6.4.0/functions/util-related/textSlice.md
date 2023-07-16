---
title: '$textSlice'
description: '$textSlice cortará un mensaje dependiendo de los argumentos dados.'
id: textSlice
---

`$textSlice` cortará un mensaje dependiendo de los argumentos dados.

## Uso

```php
$textSlice[text;from?;to]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                | Requerido |
| ------- | -------- | ----------------------------------------- |:---------:|
| text    | consulta | Texto que quieres cortar.                 | verdadero |
| ¿desde? | número   | Punto de partida donde cortar el mensaje. |    no     |
| a       | número   | Punto final donde termina el corte.       |    sí     |

## Ejemplo(s)

Esto devolverá `Hola` y eliminará `Bye` del texto dado:

```javascript
bot.command({
    name: 'textSlice',
    code: `
  $textSlice[Hello Bye;0;5]
  `
});
```