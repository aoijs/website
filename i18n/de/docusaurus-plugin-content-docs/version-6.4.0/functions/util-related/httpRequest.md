---
title: '$httpRequest'
description: '$httpRequest postet oder holt Daten von einer API.'
id: httpRequest
---

`$httpRequest` entweder Beiträge an oder abrufen von Daten aus einer API.

## Verwendung

```php
$httpRequest[URL;method;body?;property?;error?;...header?]
```

## Verwendung

| Feld         | Typ    | Beschreibung                                                                               | Erforderlich |
| ------------ | ------ | ------------------------------------------------------------------------------------------ |:------------:|
| URL          | string | URL, von der Sie Daten abrufen oder senden möchten.                                        |     wahr     |
| Methode      | string | Methode <br /> 1. **GET** (default) <br /> 2. **POST** <br /> 3. **PUT** |     wahr     |
| körper?      | string | Inhalt.                                                                                    |    falsch    |
| eigentum?    | string | Eigenschaft, das zurückgegeben werden soll (get Methode).                                  |    falsch    |
| fehler?      | string | Fehler bei der Rückgabe, wenn die Anfrage fehlschlägt.                                     |    falsch    |
| ...Kopfzeile | string | Header.                                                                                    |    falsch    |

## Beispiel(e)

Dies gibt eine zufällige Hundefaktion mit der `GET` Methode zurück:

```javascript
bot.command({
    Name: "httpRequest",
    Code: `
    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]
    `
});
```