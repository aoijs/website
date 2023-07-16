---
title: $banCount
description: '$banCount wird die Anzahl der gebannten Benutzer einer bestimmten Gilde zurückgeben.'
id: banCount
---

`$banCount` wird die Anzahl der gebannten Benutzer einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$banCount[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                         | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------------------------ | ------------ |
| guildID? | ganze Zahl | Gilden-ID der Gilde, von der du die Anzahl der gesperrten Benutzer abrufen möchtest. | falsch       |

#### Bitte beachten Sie, dass Ihr Bot Berechtigungen für `VIEW_AUDIT_LOG` benötigt

## Beispiel(e)

Dadurch wird die Anzahl der gebannten Benutzer in deiner Gilde zurückgegeben:

```javascript
bot.command({
    name: 'banCount',
    code: `
  $banCount
  `
});
```