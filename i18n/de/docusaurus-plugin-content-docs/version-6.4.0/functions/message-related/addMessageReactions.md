---
title: $addMessageReactions
description: '$addMessageReactions wird eine Reaktion auf eine bestimmte Nachricht hinzufügen.'
id: addMessageReactions
---

`$addMessageReactions` wird eine Reaktion auf eine bestimmte Nachricht hinzufügen.

## Verwendung

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## Verwendung

| Feld          | Typ        | Beschreibung                              | Erforderlich |
| ------------- | ---------- | ----------------------------------------- |:------------:|
| channelID     | ganze Zahl | Kanal-ID, wo sich die Nachricht befindet. |     wahr     |
| nachrichtenID | ganze Zahl | Nachrichten-ID.                           |     wahr     |
| reaktionen    | string     | Hinzugefügte Reaktionen.                  |     wahr     |

## Beispiel(e)

Dies wird die angegebenen Reaktionen zu Ihrer Nachricht hinzufügen:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
