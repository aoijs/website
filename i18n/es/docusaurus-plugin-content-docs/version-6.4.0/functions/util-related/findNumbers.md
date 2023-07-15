---
title: '$findNumbers'
description: '$findNumbers will attempt to return all numbers in a message of a given text.'
id: findNumbers
---

`$findNumbers` will attempt to return all numbers in a message of a given text.

## Modo de uso

```php
$findNumbers[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                           | Requerido |
| ----- | ------ | ------------------------------------ |:---------:|
| text  | string | Text where you want to find numbers. | verdadera |

## Ejemplo(s)

This will return `25` and remove `Hello, I'm [..] years old` from the given text:

```javascript
bot.command({
    name: 'findNumbers',
    code: `
  $findNumbers[Hello, I'm 25 years old]
  `
});
```
