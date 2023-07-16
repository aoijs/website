---
title: $fileExists
description: '$fileExists wird prüfen, ob eine bestimmte Datei existiert.'
id: fileExists
---

`$fileExists` wird überprüfen, ob eine bestimmte Datei existiert.

## Verwendung

```php
$fileExists[path]
```

## Verwendung

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| pfad | string | Dateipfad.   |     wahr     |

## Beispiel(e)

Wird überprüft, ob eine Datei namens `index.js` in Ihrem Verzeichnis existiert:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```