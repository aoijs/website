---
title: '$nonEscape'
description: '$nonEscape will stop escaping special characters.'
id: nonEscape
---

`$nonEscape` will stop escaping special characters.

## Uso

```php
$nonEscape[message]
```

## Parámetros

| Campo   | Tipo   | Parámetros                         | Requerido |
| ------- | ------ | ---------------------------------- | --------- |
| message | string | Text you don't want to be escaped. | verdadera |

## Ejemplo(s)

This will stop from escaping certain characters:

```javascript
bot.command({
    name: 'nonEscape',
    code: `
  $nonEscape[Hello [;)]]
  `
});
```
