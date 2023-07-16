---
title: '$getApplicationCommandID'
description: '$getApplicationCommandID gibt die ID eines bestimmten Bewerbungsbefehls zurück.'
id: getApplicationCommandID
---

`$getApplicationCommandID` gibt die ID eines bestimmten App-Befehls zurück.

## Verwendung

```php
$getApplicationCommandID[name;type?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                                                                        | Erforderlich |
| ---- | ------ | ------------------------------------------------------------------------------------------------------------------- |:------------:|
| Name | string | Name des Befehls der Anwendung.                                                                                     |     wahr     |
| typ? | string | Typ des Anwendungs-Befehls. <br /> 1. **global** (Standard) <br /> 2. **guildID** (bestimmte Gilden-ID) |    falsch    |

## Beispiel(e)

Dies gibt die ID eines Anwendungskommandos mit dem Namen "Beispiel" zurück (falls vorhanden):

```javascript
bot.command({
    name: "getApplicationCommandID",
    code: `
  $getApplicationCommandID[example;global]
  `
});
```