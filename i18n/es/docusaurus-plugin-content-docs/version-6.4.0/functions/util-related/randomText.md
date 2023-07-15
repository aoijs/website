---
title: '$randomText'
description: '$randomText will return a random word out of the given query'
id: randomText
---

`$randomText` will return a random word out of the given query

## Modo de uso

```php
$randomText[text;text;...]
```

## Parámetros

| Campo | Tipo   | Parámetros                                                  | Requerido |
| ----- | ------ | ----------------------------------------------------------- |:---------:|
| text  | string | Any words/sentences/letters you want to be chosen randomly. | verdadera |

## Ejemplo(s)

This will return a random text out of `Hello, Bye, Goodnight, See you`:

```javascript
bot.command({
    name: 'randomText',
    code: `
  $randomText[Hello;Bye;Goodnight;See you]
  `
});
```
