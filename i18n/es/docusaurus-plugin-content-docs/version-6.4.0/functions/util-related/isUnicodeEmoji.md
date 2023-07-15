---
title: '$isUnicodeEmoji'
description: '$isUnicodeEmoji will check if the given emoji is an unicode emoji.'
id: isUnicodeEmoji
---

`$isUnicodeEmoji` will check if the given emoji is an unicode emoji.

## Modo de uso

```php
$isUnicodeEmoji[emojiResolver]
```

## Parámetros

| Campo         | Tipo   | Parámetros     | Requerido |
| ------------- | ------ | -------------- |:---------:|
| emojiResolver | string | Unicode emoji. | verdadera |

## Ejemplo(s)

This will return `true` as "🤓" is an valid unicode emoji:

```javascript
bot.command({
    name: 'isUnicodeEmoji',
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
