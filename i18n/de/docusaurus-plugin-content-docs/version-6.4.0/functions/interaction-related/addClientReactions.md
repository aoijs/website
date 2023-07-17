---
title: $addClientReactions
description: '$addClientReactions wird eine Reaktion auf die Nachricht des Bots hinzufügen.'
id: addClientReactions
---

`$addClientReactions` wird eine Reaktion auf die Nachricht des Bots hinzufügen.

## Verwendung

```php
$addClientReactions[...reactions]
```

## Verwendung

| Feld       | Typ    | Beschreibung             | Erforderlich |
| ---------- | ------ | ------------------------ |:------------:|
| reaktionen | string | Hinzugefügte Reaktionen. |     wahr     |

## Beispiel(e)

Dies fügt die angegebenen Emojis zur Antwort des Bots hinzu ("Hallo!"):

```javascript
bot.command({
    name: 'addClientReactions',
    code: `
    Hallo!
    $addClientReactions[🧡;❤]
  `
});
```