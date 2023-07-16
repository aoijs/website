---
title: $roundTenth
description: '$roundTenth wird bis zum nächsten Zehntel runden.'
id: roundTenth
---

`$roundTenth` wird bis zum nächsten Zehntel runden.

## Verwendung

```php
$roundTenth[number;decimalPosition]
```

## Verwendung

| Feld              | Typ        | Beschreibung                                          | Erforderlich |
| ----------------- | ---------- | ----------------------------------------------------- |:------------:|
| anzahl            | anzahl     | Nummer zur Runde.                                     |     wahr     |
| dezimale Position | ganze Zahl | Wie viele Zahlen nach dem Komma zurückgegeben werden. |     wahr     |

## Beispiel(e)

Dies gibt `503.70` zurück, da es die nächstgelegene Nummer zu `503.6972` ist:

```javascript
bot.command({
    name: 'roundTenth',
    code: `
  $roundTenth[503.6972]
  `
});
```