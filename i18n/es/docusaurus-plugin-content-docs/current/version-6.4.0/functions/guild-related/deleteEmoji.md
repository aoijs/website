---
title: '$deleteEmoji'
description: '$deleteEmoji will delete a specific emoji.'
id: deleteEmoji
---

`$deleteEmoji` will delete a specific emoji.

## Modo de uso

```php
$deleteEmoji[emoji]
```

## Parámetros

| Campo | Tipo   | Parámetros                                                      | Requerido |
| ----- | ------ | --------------------------------------------------------------- |:---------:|
| emoji | string | Emoji Name, ID or full form of the emoji which will be deleted. | verdadera |

## Ejemplo(s)

This will delete a random emoji of your guild:

```javascript
bot.command({
    name: 'deleteEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
