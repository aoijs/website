---
title: '$isDM'
description: '$isDM wird prüfen, ob der angegebene Kanal ein DM ist oder nicht.'
id: isDM
---

`$isDM` wird überprüfen, ob der angegebene Kanal ein DM ist oder nicht.

## Verwendung

```php
$isDM[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                               | Erforderlich |
| ---------- | ---------- | ------------------------------------------ |:------------:|
| channelID? | ganze Zahl | ID des Kanals, den du überprüfen möchtest. |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob Sie den Befehl in einem DM ausführen oder nicht:

```javascript
bot.command({
    name: 'isDM',
    code: `
  $isDM[$channelID]
  `
});
```