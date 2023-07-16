---
title: $appendFile
description: '$appendFile wird gegebenen Text zu einer bestimmten Datei hinzufügen.'
id: appendFile
---

`$appendFile` wird gegebenen Text zu einer bestimmten Datei hinzufügen.

## Verwendung

```php
$appendFile[path;content;encode?]
```

## Verwendung

| Feld      | Typ            | Beschreibung                                      | Erforderlich |
| --------- | -------------- | ------------------------------------------------- |:------------:|
| pfad      | string         | Speicherort der Datei.                            |     wahr     |
| inhalt    | string, Nummer | Inhalt zum Anhängen an die Datei                  |     wahr     |
| kodieren? | string         | Kodierungstyp <br /> 1. **utf8** (Standard) |    falsch    |

## Beispiel(e)

Dies wird einen Kommentar zu Ihrer Hauptdatei hinzufügen:

```javascript
bot.command({
    Name: 'appendFile',
    Code: `
  $appendFile[./index.js;// Hello!]
  `
});
```