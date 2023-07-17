---
title: '$argsSlice'
description: '$argsSlice wird das angegebene Argument abhängig von der Benutzereingabe abschneiden.'
id: argsSlice
---

`$argsSlice` wird das angegebene Argument je nach Benutzereingabe abschneiden.

## Verwendung

```php
$argsSlice[text;from?;to] 
```

## Verwendung

| Feld | Typ    | Beschreibung                                            | Erforderlich |
| ---- | ------ | ------------------------------------------------------- |:------------:|
| text | string | Text, den du schneiden möchtest                         |     wahr     |
| aus? | anzahl | Ausgangspunkt, an dem die Nachricht zerlegt werden soll |    falsch    |
| zu   | anzahl | Endpunkt an dem Slicing endet                           |     wahr     |

## Beispiel(e)

Dies wird `Bye` zurückgeben und `Hallo` aus dem angegebenen Text entfernen:

```javascript
bot.command({
    name: 'slice',
    code: `
  $argsSlice[Hello Bye;1;5]
  `
});
```
