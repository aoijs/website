---
title: $userReacted
description: '$userReacted wird überprüfen, ob ein spezifizierter Benutzer mit einem bestimmten Emoji auf eine bestimmte Nachricht reagiert und entweder true oder false zurückgibt.'
id: userReacted
---

`$userReacted` wird überprüfen, ob ein spezifizierter Benutzer mit einem bestimmten Emoji auf eine bestimmte Nachricht reagiert und entweder true oder falsch zurückgibt.

## Verwendung

```php
$userReacted[channelID;messageID;userID;emoji]
```

## Verwendung

| Feld          | Typ        | Beschreibung         | Erforderlich |
| ------------- | ---------- | -------------------- |:------------:|
| guildID       | ganze Zahl | Die Gilden-ID.       |     wahr     |
| nachrichtenID | ganze Zahl | Die Nachrichten-ID.  |     wahr     |
| userID        | ganze Zahl | Die Benutzer-ID.     |     wahr     |
| emoji         | string     | Emoji zu überprüfen. |     wahr     |

## Beispiel(e)

Dies gibt `true` zurück, da der Bot auf die erste Befehlsmeldung reagierte:

```javascript
bot.command({
    name: 'userReacted',
    code: `
$userReacted[$channelID;$messageID;$clientID;😩]
$addCmdReactions[😩]
  `
});
```
