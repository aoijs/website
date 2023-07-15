---
title: '$isValidLink'
description: '$isValidLink will check if the given link is valid.'
id: isValidLink
---

`$isValidLink` will check if the given link is valid.

## Modo de uso

```php
$isValidLink[URL]
```

## Parámetros

| Campo | Tipo   | Parámetros       | Requerido |
| ----- | ------ | ---------------- |:---------:|
| URL   | string | Any kind of URL. | verdadera |

## Ejemplo(s)

This will return `true` as the given link is valid:

```javascript
bot.command({
    name: 'isValidLink',
    code: `
  $isValidLink[https://aoi.js.org/docs/]
  `
});
```
