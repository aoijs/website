---
title: $writeFile
description: '$writeFile wird eine neue Datei im Verzeichnis des Bots erstellen.'
id: writeFile
---

`$writeFile` wird eine neue Datei im Verzeichnis des Bots erstellen.

## Verwendung

```php
$writeFile[path;text;encoding?]
```

## Verwendung

| Feld    | Typ    | Beschreibung                          | Erforderlich |
| ------- | ------ | ------------------------------------- |:------------:|
| pfad    | string | Wo die Datei erstellt werden soll.    |     wahr     |
| text    | string | Wie der Inhalt der Datei sein sollte. |     wahr     |
| kodiert | string | Text/Datei-Kodierung.                 |    falsch    |

## Beispiel(e)

Dies wird eine Datei namens "testing.txt" mit dem Inhalt von "Hallo!":

```javascript
bot.command({
    name: "writeFile",
    code: `
    $writeFile[./testing.txt;Hello!;utf8]
    `
});
```