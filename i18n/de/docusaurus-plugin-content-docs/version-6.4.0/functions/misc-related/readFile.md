---
title: $readFile
description: '$readFile liest den Inhalt einer Datei und gibt ihn zurück.'
id: readFile
---

`$readFile` wird den Inhalt einer Datei lesen und ihn zurückgeben.

## Verwendung

```php
$readFile[path]
```

## Verwendung

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| pfad | string | Dateipfad.   |     wahr     |

## Beispiel(e)

Die Hauptdatei wird zurückgegeben (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```