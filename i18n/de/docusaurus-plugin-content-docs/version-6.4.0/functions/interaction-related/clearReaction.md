---
title: '$clearReaction'
description: '$clearReaction wird eine bestimmte Reaktion einer Nachricht eines bestimmten Benutzers entfernen.'
id: clearReaction
---

`$clearReaction` wird eine bestimmte Reaktion einer Nachricht eines bestimmten Benutzers entfernen.

## Verwendung

```php
$clearReaction[channelID;messageID;userID;emoji]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                                                              | Erforderlich |
| ------------- | ---------- | --------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | ganze Zahl | Die Kanal-ID, in der sich die Nachricht befindet.                                                         |     wahr     |
| nachrichtenID | ganze Zahl | Die Nachrichten-ID.                                                                                       |     wahr     |
| userID        | ganze Zahl | Die Benutzer-ID des Benutzers, dessen Reaktionen entfernt werden sollen.                                  |     wahr     |
| emoji         | string     | Das exakte Emoji zu entfernen. <br /> 1. **alle** (Standard) <br /> 2. **Emoji** - alle Emoji |     wahr     |

## Beispiel(e)

Dies wird die Reaktion des Bots nach zwei Sekunden hinzufügen und entfernen:

```javascript
bot.command({
    name: 'clearReaction',
    code: `
  $clearReaction[$channelID;$messageID;$clientID;🥱]
  $wait[2s]
  $addCmdReactions[🥱]
  `
});
```
