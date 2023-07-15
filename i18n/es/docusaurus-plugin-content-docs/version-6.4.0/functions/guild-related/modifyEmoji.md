---
title: '$modifyEmoji'
description: '$modifyEmoji modificará un emoji personalizado dado.'
id: modifyEmoji
---

`$modifyEmoji` modificará un emoji personalizado dado.

## Uso

```php
$modifyEmoji[servidorID;emojiID;nombre;...roles?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                      | Requerido |
| ---------- | ------ | ----------------------------------------------- |:---------:|
| servidorID | entero | ID del canal en el que se encuentra el mensaje. | verdadero |
| emojiID    | entero | El ID de Emoji.                                 | verdadero |
| nombre     | string | El nuevo nombre emoji.                          | verdadero |
| ...roles?  | entero | Rol que será capaz de utilizar ese emoji.       |   falso   |

## Ejemplo(s)

Esto editará un emoji existente / cambiará su nombre a "Ejemplo":

```javascript
bot.command({
    name: 'modifyEmoji',
    code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `
});
```
