---
title: '$getApplicationCommandOptions'
description: '$getApplicationCommandOptions gibt die Anwendungsoptionen eines bestimmten Befehls zurück.'
id: getApplicationCommandOptions
---

`$getApplicationCommandOptions` gibt die ID eines bestimmten App-Befehls zurück.

## Verwendung

```php
$getApplicationCommandOptions[name;type?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                                                                        | Erforderlich |
| ---- | ------ | ------------------------------------------------------------------------------------------------------------------- |:------------:|
| Name | string | Name des Befehls der Anwendung.                                                                                     |     wahr     |
| typ? | string | Typ des Anwendungs-Befehls. <br /> 1. **global** (Standard) <br /> 2. **guildID** (bestimmte Gilden-ID) |    falsch    |