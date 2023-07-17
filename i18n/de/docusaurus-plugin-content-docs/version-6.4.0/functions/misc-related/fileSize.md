---
title: $fileSize
description: '$fileSize gibt die Größe einer gegebenen Datei zurück.'
id: fileSize
---

`$fileSize` gibt die Größe einer vorgegebenen Datei zurück.

## Verwendung

```php
$fileSize[path;unit?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                                                                                                                                                                                                                                                                                   | Erforderlich |
| ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| pfad | string | Dateipfad.                                                                                                                                                                                                                                                                                                                     |     wahr     |
| ein? | string | In welcher Einheit wird die Größe zurückgegeben. <br /> 1. **B** (Byte / Standard) <br /> 2. **KB** (kiloByte) <br />  3. **MB** (megaByte) <br /> 4. **GB** (gigaByte) <br /> 5. **b** (Bit) <br /> 6. **kb** (KiloBit) <br /> 7. **mb** (MegaBit) <br /> 8. **GB** (GigaBit) |    falsch    |

## Beispiel(e)

Dies gibt die Größe Ihrer `index.js` in `GB` zurück:

```javascript
bot.command({
    name: "fileSize",
    code: `
  $fileSize[./index.js;GB]
  `
});
```