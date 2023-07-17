---
title: '$nonEscape'
description: '$nonEscape dejará de escapar a personajes especiales.'
id: nonEscape
---

`$nonEscape` dejará de escapar caracteres especiales.

## Uso

```php
$nonEscape[message]
```

## Parámetros

| Campo   | Tipo   | Parámetros                    | Requerido |
| ------- | ------ | ----------------------------- | --------- |
| mensaje | string | Texto que no quieres escapar. | verdadera |

## Ejemplo(s)

Esto dejará de escapar ciertos caracteres:

```javascript
bot.command({
    name: 'nonEscape',
    code: `
  $nonEscape[Hello [;)]]
  `
});
```
