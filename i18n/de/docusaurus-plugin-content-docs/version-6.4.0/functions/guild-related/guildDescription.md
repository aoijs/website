---
title: '$guildDescription'
description: '$guildDescription wird die Gildenbeschreibung zurückgeben.'
id: guildDescription
---

`$guildDescription` wird die Gildenbeschreibung zurückgeben.

## Verwendung

```php
$guildDescription[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt die Beschreibung einer bestimmten Gilde zurück:

```javascript
bot.command({
    name: 'guildDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
