---
title: '$isUnicodeEmoji'
description: '$isUnicodeEmoji comprobará si el emoji dado es un emoji unicode.'
id: isUnicodeEmoji
---

`$isUnicodeEmoji` comprobará si el emoji dado es un emoji unicode.

## Uso

```php
$isUnicodeEmoji[emojiResolver]
```

## Parámetros

| Campo                | Tipo   | Parámetros     | Requerido |
| -------------------- | ------ | -------------- |:---------:|
| resolutor de emojios | string | Unicode emoji. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` como "🤓" es un emoji unicode válido:

```javascript
bot.command({
    name: 'isUnicodeEmoji',
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
