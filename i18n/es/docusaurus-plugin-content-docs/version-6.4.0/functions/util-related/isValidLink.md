---
title: '$isValidLink'
description: '$isValidLink comprobará si el enlace dado es válido.'
id: isValidLink
---

`$isValidLink` comprobará si el enlace dado es válido.

## Uso

```php
$isValidLink[URL]
```

## Parámetros

| Campo | Tipo   | Parámetros             | Requerido |
| ----- | ------ | ---------------------- |:---------:|
| URL   | string | Cualquier tipo de URL. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` ya que el enlace dado es válido:

```javascript
bot.command({
    name: 'isValidLink',
    code: `
  $isValidLink[https://aoi.js.org/docs/]
  `
});
```
