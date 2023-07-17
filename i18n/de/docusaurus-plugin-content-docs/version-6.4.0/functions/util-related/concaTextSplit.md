---
title: $concaTextSplit
description: '$concatTextSplit verbindet den Text mit dem angegebenen Trennzeichen.'
id: concaTextSplit
---

`$concatTextSplit` verbindet den Text mit dem angegebenen Trennzeichen.

## Verwendung

```php
$concatTextSplit[...text]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                   | Erforderlich |
| ---- | ------ | -------------------------------------------------------------- |:------------:|
| text | string | Text zum Konkretieren mit den vorhandenen textSplit Elementen. |     wahr     |

## Beispiel(e)

Dies wird `Hallo, Bye` zu dem bereits verwendeten `$textSplit` Argument hinzufügen:

```javascript
bot.command({
    name: 'concatTextSplit',
    code: `
  $concatTextSplit[Hello;Bye]
  $textSplit[Goodmorning, Goodnight;, ]
  `
});
```
