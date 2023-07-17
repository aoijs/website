---
title: $guildExists
description: '$guildExists wird prüfen, ob die angegebene Gilde existiert.'
id: guildExists
---

`$guildExists` wird überprüfen, ob die angegebene Gilde existiert.

## Verwendung

```php
$guildExists[guildId]
```

## Verwendung

| Feld    | Typ        | Beschreibung | Erforderlich |
| ------- | ---------- | ------------ |:------------:|
| guildId | ganze Zahl | Gilden-ID.   |     wahr     |

## Beispiel(e)

Dies gibt `true` zurück, die deine Gilde existiert:

```javascript
bot.command({
    name: 'guildExists',
    code: `
  $guildExists[$guildID]
  `
});
```