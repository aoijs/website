---
title: '$textSlice'
description: '$textSlice will slice a message depending on the given arguments.'
id: textSlice
---

`$textSlice` will slice a message depending on the given arguments.

## Uso

```php
$textSlice[text;from?;to]
```

## Parámetros

| Campo | Tipo     | Parámetros                                 | Requerido |
| ----- | -------- | ------------------------------------------ |:---------:|
| text  | consulta | Text you want to slice.                    | verdadero |
| from? | número   | Starting point where to slice the message. |    no     |
| to    | número   | Ending point where slicing ends.           |    sí     |

## Ejemplo(s)

This will return `Hello` and remove `Bye` from the given text:

```javascript
bot.command({
    name: 'textSlice',
    code: `
  $textSlice[Hello Bye;0;5]
  `
});
```