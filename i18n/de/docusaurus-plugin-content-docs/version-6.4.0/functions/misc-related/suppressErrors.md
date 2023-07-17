---
title: '$suppressErrors'
description: '$suppressErrors wird aoi.js Funktionsfehler unterdrücken.'
id: suppressErrors
---

`$suppressErrors` unterdrückt ai.js Funktionsfehler.

## Verwendung

```php
$suppressErrors[errorMsg?]
```

## Verwendung

| Feld     | Typ    | Beschreibung                 | Erforderlich |
| -------- | ------ | ---------------------------- |:------------:|
| errorMsg | string | Fehlermeldung zurückzugeben. |    falsch    |

## Beispiel(e)

Dies unterdrückt alle Fehler Ihres Codes und gibt stattdessen die vordefinierte Fehlermeldung zurück:

```javascript
bot.command({
    Name: "suppressErrors",
    Code: `
    $description
    $suppressErrors[Something went wrong!]
    ` // beabsichtigte ungültige Nutzung von $description
});
```