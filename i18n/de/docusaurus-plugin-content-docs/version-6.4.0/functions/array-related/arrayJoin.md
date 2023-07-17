---
title: '$arrayJoin'
description: '$arrayJoin wird das Array mit einem angegebenen Trennzeichen verbinden.'
id: arrayJoin
---

`$arrayJoin` wird das Array mit einem angegebenen Trennzeichen verbinden.

## Verwendung

```php
$arrayJoin[name;separator?]
```

## Parameter

| Feld          | Typ    | Beschreibung  | Erforderlich |
| ------------- | ------ | ------------- |:------------:|
| name          | string | Array-Name.   |     wahr     |
| trennzeichen? | string | Trennzeichen. |    falsch    |

## Beispiel(e)

```javascript
bot.command({
    name: "array-join",
    code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```