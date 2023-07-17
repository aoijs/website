---
title: '$isVideoOn'
description: '$isVideoOn prüft, ob der angegebene Benutzer sein Video in einem Sprachkanal hat.'
id: isVideoOn
---

`$isVideoOn` prüft, ob der angegebene Benutzer sein Video in einem Sprachkanal anzeigt.

## Verwendung

```php
$isVideoOn[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                    | Erforderlich |
| -------- | ---------- | --------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | ID des Benutzers, der das Video eingeschaltet hat.              |    falsch    |
| guildID? | ganze Zahl | ID der Gilde, die du überprüfen möchtest, ob sie ihr Video hat. |    falsch    |

## Beispiel(e)

Wird überprüft, ob Sie die Videofunktion in einem Sprachkanal verwenden:

```javascript
bot.command({
    name: 'isVideoOn',
    code: `
  $isVideoOn[$authorID;$guildID]
  `
});
```
