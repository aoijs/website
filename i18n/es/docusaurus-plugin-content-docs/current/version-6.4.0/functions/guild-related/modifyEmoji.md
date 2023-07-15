---
title: '$modifyEmoji'
description: '$modifyEmoji will modify a given custom emoji.'
id: modifyEmoji
---

`$modifyEmoji` will modify a given custom emoji.

## Modo de uso

```php
$modifyEmoji[guildID;emojiID;name;...roles?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                            | Requerido |
| ---------- | ------ | ----------------------------------------------------- |:---------:|
| servidorID | entero | The ID of the guild of where the emoji is located in. | verdadero |
| emojiID    | entero | The Emoji ID.                                         | verdadero |
| nombre     | string | The new emoji name.                                   |    sí     |
| ...roles?  | entero | Roles that will be able to use that emoji.            |   falso   |

## Ejemplo(s)

This will edit a existing emoji / change its name to "Example":

```javascript
bot.command({
    name: 'modifyEmoji',
    code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `
});
```
