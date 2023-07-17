---
title: '$isInteger'
description: '$isInteger wird prüfen, ob die angegebene Zahl eine Ganzzahl ist oder nicht.'
id: isInteger
---

`$isInteger` wird überprüfen, ob die angegebene Zahl eine Ganzzahl ist oder nicht.

## Verwendung

```php
$isInteger[number]
```

## Verwendung

| Feld   | Typ    | Beschreibung                                                           | Erforderlich |
| ------ | ------ | ---------------------------------------------------------------------- |:------------:|
| anzahl | anzahl | Nummer die Sie überprüfen möchten, ob es eine Ganzzahl ist oder nicht. |     wahr     |

## Beispiel(e)

Überprüft, ob Ihre Nachricht eine Ganzzahl enthält und `true` oder `false` zurückgibt:

```javascript
bot.command({
    name: 'isInteger',
    code: `
  $isInteger[$message]
  `
});
```
