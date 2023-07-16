---
title: $addCmdReactions
description: '$addCmdReactions wird mit angegebenen Emojis auf die Nachricht des Autors reagieren.'
id: addCmdReactions
---

`$addCmdReactions` wird mit bestimmten Emojis auf die Nachricht des Autors reagieren.

## Verwendung

```php
$addCmdReactions[...reactions]
```

## Verwendung

| Feld       | Typ    | Beschreibung             | Erforderlich |
| ---------- | ------ | ------------------------ |:------------:|
| reaktionen | string | Hinzugefügte Reaktionen. |     wahr     |

## Beispiel(e)

Dies fügt die angegebenen Emojis zur Antwort des Autors hinzu ("Hallo!"):

```javascript
bot.command({
    name: 'addCmdReactions',
    code: `
Hallo!
$addCmdReactions[🧡;❤]
  `
});
```
