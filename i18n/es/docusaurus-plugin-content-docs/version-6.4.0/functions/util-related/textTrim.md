---
title: '$textTrim'
description: '$textTrim will remove all extra spaces, multiple spaces after one space, and replaces those with one single space.'
id: textTrim
---

`$textTrim` will remove all extra spaces, multiple spaces after one space, and replaces those with one single space.

## Uso

```php
$textTrim[text]
```

## Parámetros

| Campo | Tipo   | Parámetros              | Requerido |
| ----- | ------ | ----------------------- |:---------:|
| text  | string | The text to be trimmed. | verdadera |

## Ejemplo(s)

This will remove any extra spaces of the given text, in this case it would return `Imagine a string package.`:

```javascript
bot.command({
    name: "textTrim",
    code: `
    $textTrim[      Imagine a string package      ]
    `
});
```