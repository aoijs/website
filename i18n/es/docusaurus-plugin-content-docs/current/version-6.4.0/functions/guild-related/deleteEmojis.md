---
title: '$deleteEmojis'
description: '$deleteEmojis will delete multiple emoji.'
id: deleteEmojis
---

`$deleteEmojis` will delete multiple emoji.

## Modo de uso

```php
$deleteEmojis[...emojis]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                                      | Requerido |
| ------ | ------ | --------------------------------------------------------------- |:---------:|
| emojis | string | Emoji Name, ID or full form of the emoji which will be deleted. | verdadera |

## Ejemplo(s)

This will delete two random emojis of your guild:

```javascript
bot.command({
    name: 'deleteEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
