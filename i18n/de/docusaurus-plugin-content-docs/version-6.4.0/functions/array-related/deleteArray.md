---
title: '$deleteArray'
description: '$deleteArray wird ein zuvor erstelltes Array löschen.'
id: deleteArray
---

`$deleteArray` wird ein zuvor erstelltes Array löschen.

## Verwendung

```php
$deleteArray[name]
```

## Parameter

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| name | string | Array-Name.  |     wahr     |

## Beispiel(e)

Dies löscht das Array "Array":

```javascript
bot.command({
    name: "deleteArray",
    code: `
  $deleteArray[array]
  $createArray[array;Hello;This;Is;Great]
  `
});
```