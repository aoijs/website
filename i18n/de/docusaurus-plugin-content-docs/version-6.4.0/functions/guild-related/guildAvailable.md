---
title: $guildAvailable
description: '$guildAvailable wird zurückkehren, wenn die angegebene Gilde auf Discord verfügbar ist.'
id: guildAvailable
---

`$guildAvailable` wird zurückkehren, wenn die angegebene Gilde auf Discord verfügbar ist.

## Verwendung

```php
$guildAvailable[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde. |    falsch    |

## Beispiel(e)

Dies gibt `true` oder `false` zurück, je nachdem, ob die Gilde verfügbar ist:

```javascript
bot.command({
    name: 'guildAvailable',
    code: `
  $guildAvailable[$guildID]
  `
});
```
