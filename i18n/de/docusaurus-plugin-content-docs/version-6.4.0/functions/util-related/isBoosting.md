---
title: '$isBoosting'
description: '$isBoosting wird prüfen, ob der angegebene Benutzer die angegebene Gilde erhöht.'
id: isBoosting
---

`$isBoosting` wird überprüfen, ob der angegebene Benutzer die Gilde erhöht.

## Verwendung

```php
$isBoosting[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                        | Erforderlich |
| -------- | ---------- | --------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | Benutzer-ID, um zu überprüfen, ob sie Booster sind. |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID, wo sie den Server gebootet haben.    |    falsch    |

## Beispiel(e)

Dies wird `false` oder `true` zurückgeben, je nachdem, ob Sie diesen Server geboostet haben:

```javascript
bot.command({
    name: 'isBoosting',
    code: `
  $isBoosting[$authorID;$guildID]
  `
});
```
