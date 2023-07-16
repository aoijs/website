---
title: '$clearReactions'
description: '$clearReactions wird eine bestimmte oder alle Reaktionen einer Nachricht entfernen.'
id: clearReactions
---

`$clearReactions` wird eine bestimmte oder alle Reaktionen einer Nachricht entfernen.

## Verwendung

```php
$clearReactions[channelID;messageID;emoji]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                                                                    | Erforderlich |
| ------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | ganze Zahl | Die Kanal-ID, in der sich die Nachricht befindet.                                                               |     wahr     |
| nachrichtenID | ganze Zahl | Die Nachrichten-ID.                                                                                             |     wahr     |
| emoji         | string     | Die Emoji, die entfernt werden soll. <br /> 1. **alle** (Standard) <br /> 2. **Emoji** - alle Emoji |     wahr     |

## Beispiel(e)

Dies wird zwei Emojis hinzufügen und eines komplett entfernen:

```javascript
bot.command({
    name: 'clearReactions',
    code: `
  $clearReactions[$channelID;$messageID;🥱]
  $wait[2s]
  $addCmdReactions[🥱;😩]
  `
});
```
