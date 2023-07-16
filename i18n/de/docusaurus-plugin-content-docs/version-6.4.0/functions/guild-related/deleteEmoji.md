---
title: '$deleteEmoji'
description: '$deleteEmoji wird ein bestimmtes Emoji löschen.'
id: deleteEmoji
---

`$deleteEmoji` löscht ein bestimmtes Emoji.

## Verwendung

```php
$deleteEmoji[emoji]
```

## Verwendung

| Feld  | Typ    | Beschreibung                                                        | Erforderlich |
| ----- | ------ | ------------------------------------------------------------------- |:------------:|
| emoji | string | Emoji Name, ID oder vollständige Form des Emoji, der gelöscht wird. |     wahr     |

## Beispiel(e)

Dies löscht einen zufälligen Emoji deiner Gilde:

```javascript
bot.command({
    name: 'deleteEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
