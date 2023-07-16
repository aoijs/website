---
title: '$guildContentFilter'
description: '$guildContentFilter wird die Inhaltsfilter-Ebene der Gilde zurückgeben.'
id: guildContentFilter
---

`$guildContentFilter` wird die Inhaltsfilter-Ebene der Gilde zurückgeben.

## Verwendung

```php
$guildContentFilter[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |     wahr     |

| Typ |             |
| --- | ----------- |
| 0   | Deaktiviert |
| 1   | Mittel      |
| 2   | Hoch        |

## Beispiel(e)

Dies gibt die Inhaltsfilter-Ebene einer bestimmten Gilde zurück:

```javascript
bot.command({
    name: 'guildContentFilter',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
