---
title: $deleteFile
description: '$deleteFile löscht eine gegebene Datei.'
id: deleteFile
---

`$deleteFile` löscht eine bestimmte Datei.

## Verwendung

```php
$deleteFile[path]
```

## Verwendung

| Feld | Typ    | Beschreibung | Erforderlich |
| ---- | ------ | ------------ |:------------:|
| pfad | string | Dateipfad.   |     wahr     |

## Beispiel(e)

Dies wird Ihre `index.js` löschen (tun Sie das eigentlich nicht):

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```