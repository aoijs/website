---
title: '$emojiCount'
description: '$emojiCount will return the emoji count of a guild.'
id: emojiCount
---

`$emojiCount` will return the emoji count of a guild.

## Modo de uso

```php
$emojiCount[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                             | Requerido |
| ----------- | ------- | ------------------------------------------------------ |:---------:|
| servidorID? | integer | From where the emojis will be counted and returned of. |    no     |

## Ejemplo(s)

This will return the emoji count of your guild:

```javascript
bot.command({
    name: 'emojiCount',
    code: `
  You have $emojiCount emojis in your guild!
  `
});
```