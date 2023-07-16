---
title: '$guildVerificationLevel'
description: '$guildVerificationLevel wird die Verifizierungsstufe der Gilde zurückgeben.'
id: guildVerificationLevel
---

`$guildVerificationLevel` wird die Verifizierungsstufe der Gilde zurückgeben.

## Verwendung

```php
$guildVerificationLevel[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

| Typ |         |
| --- | ------- |
| 0   | Keine   |
| 1   | Niedrig |
| 2   | Mittel  |
| 3   | Hoch    |
| 4   | Höchste |

## Beispiel(e)

Dies gibt die Verifizierungsstufe der Gilde zurück:

```javascript
bot.command({
    name: 'guildVerificationLevel',
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
