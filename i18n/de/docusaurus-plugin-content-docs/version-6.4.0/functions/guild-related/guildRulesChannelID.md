---
title: '$guildRulesChannelID'
description: '$guildRulesChannelID wird die eingestellte Regel-Kanal-ID einer Gilde zurückgeben.'
id: guildRulesChannelID
---

`$guildRulesChannelID` wird die Gildenregel-ID zurückgeben.

## Verwendung

```php
$guildRulesChannelID[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt die ID des Regelkanals der Gilde zurück (nur Community-Gilden):

```javascript
bot.command({
    Name: 'guildRulesChannelID',
    Code: `
  $guildRulesChannelID[$guildID]
  `
});
```
