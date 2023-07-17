---
title: '$guildMFALevel'
description: '$guildMFALevel wird die MFA-Stufe der Gilde zurückgeben.'
id: guildMFALevel
---

`$guildMFALevel` wird die MFA-Stufe der Gilde zurückgeben.

## Verwendung

```php
$guildMFALevel[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

| Typ |                                                                     |
| --- | ------------------------------------------------------------------- |
| 0   | Gilde hat MFA/2FA Anforderungen für Moderationsaktionen deaktiviert |
| 1   | Gilde hat MFA/2FA Anforderungen für Moderationsaktionen             |

## Beispiel(e)

Dies wird die MFA-Stufe der Gilde zurückgeben:

```javascript
bot.command({
    name: 'guildMFALevel',
    code: `
  $guildMFALevel[$guildID]
  `
});
```
