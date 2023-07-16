---
title: '$reverse'
description: '$reverse will reverse given text.'
id: reverse
---

`$reverse` will reverse given text.

## Uso

```php
$reverse[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                | Requerido |
| ----- | ------ | ------------------------- |:---------:|
| text  | string | Text you want to reverse. | verdadera |

## Ejemplo(s)

This will the following text readable:

```javascript
bot.command({
    name: 'reverse',
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```