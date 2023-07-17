---
title: '$deleteApplicationCommand'
description: '$deleteApplicationCommand wird einen App-Befehl löschen.'
id: deleteApplicationCommand
---

`$deleteApplicationCommand` wird einen App-Befehl löschen.

## Verwendung

```php
$deleteApplicationCommand[guildID/global;id]
```

## Verwendung

| Feld           | Typ              | Beschreibung                                                                                | Erforderlich |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------- |:------------:|
| guildID/global | string, Ganzzahl | Typ des Anwendungs-Befehls. <br/> 1. **global** <br/> 2. **bestimmte GildenID** |     wahr     |
| id             | ganze Zahl       | ID des Anwendungskommandos, die gelöscht wird.                                              |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: 'deleteApplicationCommand',
    code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `
});
```
