---
title: '$jsonRequest'
description: '$jsonRequest wird eine GET-Anfrage an eine angegebene URL senden.'
id: jsonRequest
---

`$jsonRequest` wird eine GET-Anfrage an eine angegebene URL senden.

## Verwendung

```php
$jsonRequest[URL;property?;error?;...header?]
```

## Verwendung

| Feld         | Typ    | Beschreibung                                          | Erforderlich |
| ------------ | ------ | ----------------------------------------------------- |:------------:|
| URL          | string | URL, von der Sie Daten senden möchten                 |     wahr     |
| eigentum?    | string | Rückzugebendes Objekt (Methode erhalten)              |    falsch    |
| fehler?      | string | Fehler bei der Rückgabe, wenn die Anfrage fehlschlägt |    falsch    |
| ...Kopfzeile | string | Header.                                               |    falsch    |

## Beispiel(e)

Dies gibt eine zufällige Tatsache zurück:

```javascript
bot.command({
    Name: "jsonRequest",
    Code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    `
});
```