---
title: '$argsSlice'
description: '$argsSlice will slice the given argument depending on the users input.'
id: argsSlice
---

`$argsSlice` will slice the given argument depending on the users input.

## Modo de uso

```php
$argsSlice[text;from?;to] 
```

## Parámetros

| Campo | Tipo     | Parámetros                                | Requerido |
| ----- | -------- | ----------------------------------------- |:---------:|
| text  | consulta | Text you want to slice                    | verdadero |
| from? | número   | Starting point where to slice the message |    no     |
| to    | número   | Ending point where slicing ends           |    sí     |

## Ejemplo(s)

This will return `Bye` and remove `Hello` from the given text:

```javascript
bot.command({
    name: 'slice',
    code: `
  $argsSlice[Hello Bye;1;5]
  `
});
```
