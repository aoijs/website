---
title: '$isTimeout'
description: '$isTimeout wird prüfen, ob der Benutzer mit Discords eingebauter Timeout-Funktion Timeout benutzt wird.'
id: isTimeout
---

`$isTimeout` wird prüfen, ob der Benutzer mit Discords eingebauter Timeout-Funktion Timeout verwendet wird.

## Verwendung

```php
$isTimeout[guildID?;userID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                    | Erforderlich |
| -------- | ---------- | ----------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde, in der sie gewechselt werden. |    falsch    |
| userID?  | ganze Zahl | Die ID des Benutzers, der Timeouted ist.        |    falsch    |

## Beispiel(e)

Dies wird überprüfen, ob Sie Timeout sind und entweder `true` oder `false` zurückgeben:

```javascript
bot.command({
    name: 'isTimeout',
    code: `
  $isTimeout[$guildID;$authorID]
  `
});
```
