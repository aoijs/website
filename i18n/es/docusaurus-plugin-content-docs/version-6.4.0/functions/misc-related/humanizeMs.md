---
title: '$humanizeMs'
description: '$humanizeMs convertirá el MS a tiempo legible.'
id: humanizeMs
---

`$humanizeMs` convertirá el MS en tiempo legible.

## Uso

```php
$humanizeMs[tiempo]
```

## Parámetros

| Campo  | Tipo   | Parámetros    | Requerido |
| ------ | ------ | ------------- |:---------:|
| tiempo | número | Tiempo en MS. | verdadera |

## Ejemplo(s)

Esto devolverá `6mon 1w 4d 16h 34m` convertido de `16782516189` MS:

```javascript
bot.command({
    name: "humanizeMs",
    code: `
    $humanizeMs[16782516189]
    `
});
```