---
title: $onlyIfMessageContains
description: '$onlyIfMessageContains wird überprüfen, ob die Nachricht den angegebenen Text enthält und ob sie nicht eine Fehlermeldung zurückgibt.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` wird überprüfen, ob die Nachricht den angegebenen Text enthält und ob nicht eine Fehlermeldung zurückgegeben wird.

## Verwendung

```php
$onlyIfMessageContains[content;...text;error]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                        | Erforderlich |
| ---------- | ------ | --------------------------------------------------- |:------------:|
| inhalt     | string | Nachricht, die den angegebenen Text enthalten soll. |     wahr     |
| text       | string | Text zum Prüfen in der Nachricht.                   |     wahr     |
| fehlerhaft | string | Fehler bei der Rückgabe.                            |     wahr     |

## Beispiel(e)

Dies gibt die Fehlermeldung zurück, da "aoi.js" nicht in "Hallo!" erscheint:

```javascript
bot.command({
    name: "onlyIfMessageContains",
    code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```