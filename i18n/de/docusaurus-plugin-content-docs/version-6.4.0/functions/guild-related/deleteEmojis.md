---
title: '$deleteEmojis'
description: '$deleteEmojis wird mehrere Emoji löschen.'
id: deleteEmojis
---

`$deleteEmojis` löscht mehrere Emoji.

## Verwendung

```php
$deleteEmojis[...emojis]
```

## Verwendung

| Feld   | Typ    | Beschreibung                                                        | Erforderlich |
| ------ | ------ | ------------------------------------------------------------------- |:------------:|
| emojis | string | Emoji Name, ID oder vollständige Form des Emoji, der gelöscht wird. |     wahr     |

## Beispiel(e)

Dies löscht zwei zufällige Emojis deiner Gilde:

```javascript
bot.command({
    name: 'deleteEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
