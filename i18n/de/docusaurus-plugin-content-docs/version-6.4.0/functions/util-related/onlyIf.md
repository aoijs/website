---
title: '$onlyIf'
description: '$onlyIf prüft eine Bedingung und gibt eine Fehlermeldung zurück, wenn diese Bedingung nicht übereinstimmt.'
id: onlyIf
---

`$onlyIf` prüft eine Bedingung und gibt eine Fehlermeldung zurück, wenn diese Bedingung nicht übereinstimmt.

## Verwendung

```php
$onlyIf[condition;error]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                                     | Erforderlich |
| ---------- | ------ | ---------------------------------------------------------------- |:------------:|
| bedingung  | string | Bedingung zu überprüfen.                                         |     wahr     |
| fehlerhaft | string | Fehler beim Zurückgeben, wenn die Bedingung nicht übereinstimmt. |    falsch    |

## Beispiel(e)

Dadurch wird die Fehlermeldung zurückgegeben, da 5 nicht gleich 3:

```javascript
bot.command({
    Name: "onlyIf",
    code: `
    Ok.
    $onlyIf[5==3;That's wrong!]
    `
});
```