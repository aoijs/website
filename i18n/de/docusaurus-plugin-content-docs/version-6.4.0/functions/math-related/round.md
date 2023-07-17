---
title: $round
description: '$round wird auf die nächste ganze Zahl umrunden.'
id: round
---

`$round` rundet die nächste ganze Zahl ab.

## Verwendung

```php
$round[number]
```

## Verwendung

| Feld   | Typ    | Beschreibung      | Erforderlich |
| ------ | ------ | ----------------- |:------------:|
| anzahl | anzahl | Nummer zur Runde. |     wahr     |

## Beispiel(e)

Dies wird `555` zurückgeben, da es die nächste Nummer zu `555.78` ist:

```javascript
bot.command({
    name: 'round',
    code: `
  $round[555.78]
  `
});
```