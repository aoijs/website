---
title: '$isDeafen'
description: '$isDeafen wird prüfen, ob ein bestimmter Benutzer taub ist oder nicht.'
id: isDeafen
---

`$isDeafen` wird überprüfen, ob ein bestimmter Benutzer taub ist oder nicht.

## Verwendung

```php
$isDeafen[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                | Erforderlich |
| -------- | ---------- | ----------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | Benutzer-ID die du überprüfen möchtest, ob sie taub sind,   |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID, wo du überprüfen möchtest, ob sie taub sind. |    falsch    |

## Beispiel(e)

Dies wird `false` oder `true` zurückgeben, je nachdem, ob du derzeit taub bist oder nicht:

```javascript
bot.command({
    name: 'isDeafen',
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
