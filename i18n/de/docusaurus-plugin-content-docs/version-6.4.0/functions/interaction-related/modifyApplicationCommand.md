---
title: '$modifyApplicationCommand'
description: '$modifyApplicationCommand wird einen bestehenden Applikationsbefehl ändern.'
id: modifyApplicationCommand
---

`$modifyApplicationCommand` wird einen bestehenden App-Befehl ändern.

## Verwendung

```php
$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]
```

## Verwendung

| Feld           | Typ                      | Beschreibung                                                                                | Erforderlich |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------- |:------------:|
| guildID/global | ganzzahlige Zeichenkette | Typ des Anwendungs-Befehls. <br/> 1. **global** <br/> 2. **bestimmte GildenID** |     wahr     |
| appID          | ganze Zahl               | Anwendungskommando-ID.                                                                      |     wahr     |
| ...Optionen    | objekt                   | Neue Daten für den Befehl Anwendung.                                                        |     wahr     |