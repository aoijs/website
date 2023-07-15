---
title: '$textSplit'
description: '$textSplit'
id: textSplit
---

`$textSplit`

## Modo de uso

```php
$textSplit[text;sep?]
```

## Parámetros

| Campo | Tipo     | Parámetros                        | Requerido |
| ----- | -------- | --------------------------------- |:---------:|
| text  | consulta | Query of arguments.               | verdadero |
| sep?  | consulta | Separator for the text arguments. |    no     |

## Ejemplo(s)

This will return `hello, how are you`:

```javascript
bot.command({
    name: 'textSplit',
    code: `
  $splitText[1] $splitText[3] $splitText[6] $splitText[7]
  $textSplit[hello,__blurr__how__ayaka__leref__are__you;__]
  `
});
```