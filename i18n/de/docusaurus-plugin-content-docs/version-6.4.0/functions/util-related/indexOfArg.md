---
title: '$indexOfArg'
description: '$indexOfArg wird den Index der angegebenen Abfrage zurückgeben.'
id: indexOfArg
---

`$indexOfArg` gibt den Index der angegebenen Abfrage zurück.

## Verwendung

```php
$indexOfArg[string;query]
```

## Verwendung

| Feld    | Typ    | Beschreibung                                  | Erforderlich |
| ------- | ------ | --------------------------------------------- |:------------:|
| string  | string | Der Text, den der Bot den Index überprüft.    |     wahr     |
| abfrage | string | Die Abfrage, auf die der Bot überprüfen wird. |     wahr     |

## Beispiel(e)

Dies wird `3` zurückgeben, da `great` das dritte Argument in der Abfrage ist:

```javascript
bot.command({
    name: 'indexOfArgs',
    code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```
