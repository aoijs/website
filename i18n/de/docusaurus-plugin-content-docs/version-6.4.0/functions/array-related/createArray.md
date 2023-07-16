---
title: '$createArray'
description: '$createArray wird ein neues Array mit angegebenen Elementen erstellen.'
id: createArray
---

`$createArray` wird ein neues Array mit angegebenen Elementen erstellen.

## Verwendung

```php
$createArray[name;...elemente]
```

## Verwendung

| Feld        | Typ    | Beschreibung             | Erforderlich |
| ----------- | ------ | ------------------------ |:------------:|
| name        | string | Array-Name.              |     wahr     |
| ...elemente | string | hinzuzufügende Elemente. |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: "array-create",
    code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```