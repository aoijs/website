---
title: $createFile
description: '$createFile wird einen Dateianhang erstellen.'
id: createFile
---

`$createFile` wird einen Dateianhang erstellen.

## Verwendung

```php
$createFile[attachment;name]
```

## Verwendung

| Feld   | Typ    | Beschreibung          | Erforderlich |
| ------ | ------ | --------------------- |:------------:|
| anhang | string | Inhalt der Datei.     |     wahr     |
| name   | string | Der Name des Anhangs. |     wahr     |

## Beispiel(e)

Dies wird eine Textdatei mit dem Namen **`example.txt`** mit dem Text "Dies ist ein Beispiel!":

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
