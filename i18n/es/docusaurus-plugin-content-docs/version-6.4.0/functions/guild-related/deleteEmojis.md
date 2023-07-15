---
title: '$deleteEmojis'
description: '$deleteEmojis clona un canal.'
id: deleteEmojis
---

`$deleteEmojis` eliminará múltiples emoji.

## Uso

```php
$deleteEmojis[...emojis]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                                         | Requerido |
| ------ | ------ | ------------------------------------------------------------------ |:---------:|
| emojis | string | Nombre de Emoji, ID o forma completa del emoji que será eliminado. | verdadera |

## Ejemplo(s)

Esto baneará a un usuario aleatorio de tu gremio:

```javascript
bot.command({
    name: 'deleteEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
