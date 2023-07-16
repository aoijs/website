---
title: '$arrayPush'
description: '$arrayPush wird die angegebenen Elemente dem Array hinzufügen.'
id: arrayPush
---

`$arrayPush` wird dem Array gegebene Elemente hinzufügen.

## Verwendung

```php
$arrayPush[...elements]
```

## Parameter

| Feld        | Typ    | Beschreibung             | Erforderlich |
| ----------- | ------ | ------------------------ |:------------:|
| ...elemente | string | hinzuzufügende Elemente. |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-push",
    code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```