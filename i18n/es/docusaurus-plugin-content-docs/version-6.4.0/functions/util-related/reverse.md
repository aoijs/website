---
title: '$reverse'
description: '$reverse revertirá el texto dado.'
id: reverse
---

`$reverse` revertirá el texto dado.

## Uso

```php
$reverse[text]
```

## Parámetros

| Campo | Tipo   | Parámetros                  | Requerido |
| ----- | ------ | --------------------------- |:---------:|
| text  | string | Texto que quieres revertir. | verdadera |

## Ejemplo(s)

Esto se puede leer el siguiente texto:

```javascript
bot.command({
    name: 'reverse',
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```