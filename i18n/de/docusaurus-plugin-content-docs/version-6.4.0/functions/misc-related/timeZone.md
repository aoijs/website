---
title: '$timeZone'
description: '$timeZone ändert die Zeitzone jeder Zeitfunktion im verwendeten Befehl.'
id: timeZone
---

`$timeZone` ändert die Zeitzone jeder Zeitfunktion im verwendeten Befehl.

## Verwendung

```php
$timeZone[timezone]
```

## Verwendung

| Feld     | Typ    | Beschreibung                  | Erforderlich |
| -------- | ------ | ----------------------------- |:------------:|
| timezone | string | Zeitzone/Lokale Formatierung. |    falsch    |

Sie finden alle Zeitzonen __* *[hier](https://gist.githubusercontent.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a/raw/8b5abde6f9c7d5570df3a2aa22325d7d20a8b5d7/moment-js-timezones.txt) **__.

## Beispiel(e)

Sie können die Zeitzone mit `$timezone` wie folgt ändern:

```javascript
bot.command({
    Name: "time",
    Code: `
    $hour:$minute:$second
    $timeZone[America/New_York]
    ` // gibt die aktuelle Zeit von New York
});
```