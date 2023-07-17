---
title: '$findTextSplitIndex'
description: '$findTextSplitIndex gibt den Index eines Textteil-Elements nach einer gegebenen Abfrage zurück.'
id: findTextSplitIndex
---

`$findTextSplitIndex` gibt den Index eines Text-Split-Elements nach einer gegebenen Abfrage zurück.

## Verwendung

```php
$findTextSplitIndex[query]
```

## Verwendung

| Feld    | Typ    | Beschreibung | Erforderlich |
| ------- | ------ | ------------ |:------------:|
| abfrage | string | Abfragen.    |     wahr     |

## Beispiel(e)

Dies gibt `3` zurück, da sich die erste `Cya` in diesem `$textSplit` in der dritten Position befindet:

```javascript
bot.command({
    name: "findTextSplitIndex",
    code: `
  $findTextSplitIndex[Cya]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```