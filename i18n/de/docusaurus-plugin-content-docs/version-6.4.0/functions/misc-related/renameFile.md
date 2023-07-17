---
title: $renameFile
description: '$renameFile wird eine Datei im Verzeichnis Ihres Bots umbenennen.'
id: renameFile
---

`$renameFile` wird eine Datei im Verzeichnis Ihres Bots umbenennen.

## Verwendung

```php
$renameFile[oldFile;newFile]
```

## Verwendung

| Feld    | Typ    | Beschreibung     | Erforderlich |
| ------- | ------ | ---------------- |:------------:|
| oldFile | string | Alter Dateiname. |     wahr     |
| newFile | string | Neuer Dateiname. |     wahr     |

## Beispiel(e)

Dies ändert Ihre index.js in eine index.txt-Datei:

```javascript
bot.command({
    name: "renameFile",
    code: `
    $renameFile[./index.js;./index.txt]
    `
});
```