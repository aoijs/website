---
title: '$userStatus'
description: '$userStatus wird die Anwesenheit eines Benutzers zurückgeben.'
id: userStatus
---

`$userStatus` wird die Anwesenheit eines Benutzers zurückgeben.

## Verwendung

```php
$userStatus[guildId?;userId?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                      | Erforderlich |
| -------- | ---------- | ----------------------------------------------------------------- |:------------:|
| guildId? | ganze Zahl | Die Gilden-ID von welcher Gilde du den Status abrufen möchtest.   |    falsch    |
| userId?  | ganze Zahl | Die ID des Benutzers, von dem Sie den Status zurückgeben möchten. |    falsch    |

## Beispiel(e)

Dies wird entweder `idle`, `online`, `unsichtbare` oder `dnd` zurückgeben, je nach aktueller Präsenz:

```javascript
bot.command({
    name: 'userStatus',
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
