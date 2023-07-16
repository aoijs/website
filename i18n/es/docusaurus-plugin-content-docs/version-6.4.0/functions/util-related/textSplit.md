---
title: '$textSplit'
description: '$textSplit'
id: textSplit
---

`$textSplit`

## Uso

```php
$textSplit[text;sep?]
```

## Parámetros

| Campo | Tipo     | Parámetros                              | Requerido |
| ----- | -------- | --------------------------------------- |:---------:|
| text  | consulta | Consulta de argumentos.                 | verdadero |
| sep?  | consulta | Separador para los argumentos de texto. |    no     |

## Ejemplo(s)

Esto devolverá `Hola, cómo eres`:

```javascript
bot.command({
    name: 'textSplit',
    code: `
  $splitText[1] $splitText[3] $splitText[6] $splitText[7]
  $textSplit[hello,__blurr__how__ayaka__leref__are__you;__]
  `
});
```