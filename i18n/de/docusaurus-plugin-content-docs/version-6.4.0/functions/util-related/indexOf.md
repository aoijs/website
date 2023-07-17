---
title: '$indexOf'
description: '$indexOf gibt den Index des angegebenen Zeichens zurück.'
id: indexOf
---

`$indexOf` gibt den Index des angegebenen Zeichens zurück.

## Verwendung

```php
$indexOf[string;char]
```

## Verwendung

| Feld   | Typ    | Beschreibung                               | Erforderlich |
| ------ | ------ | ------------------------------------------ |:------------:|
| string | string | Der Text, den der Bot den Index überprüft. |     wahr     |
| char   | string | Die Zeichen, auf die der Bot überprüft.    |     wahr     |

## Beispiel(e)

Dies gibt `8` zurück, da es die erste auftretende Position des Zeichens `w` ist:

```javascript
bot.command({
    name: 'indexOf',
    code: `
  $indexOf[Hello, what is wrong with you?;w]
  `
});
```
