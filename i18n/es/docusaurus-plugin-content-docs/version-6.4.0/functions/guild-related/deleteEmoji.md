---
title: '$deleteEmoji'
description: '$deleteEmoji clona un canal.'
id: deleteEmoji
---

`$deleteEmoji` clona un canal.

## Uso

```php
$deleteEmoji[emoji]
```

## Parámetros

| Campo | Tipo   | Parámetros                                                         | Requerido |
| ----- | ------ | ------------------------------------------------------------------ |:---------:|
| emoji | string | Nombre de Emoji, ID o forma completa del emoji que será eliminado. | verdadera |

## Ejemplo(s)

Esto baneará a un usuario aleatorio de tu gremio:

```javascript
bot.command({
    name: 'deleteEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
