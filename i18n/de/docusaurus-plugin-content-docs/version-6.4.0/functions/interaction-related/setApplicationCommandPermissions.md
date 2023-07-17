---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions wird die Berechtigungen eines bestimmten Anwendungsbefehls festlegen.'
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` wird die Berechtigungen einer bestimmten Anwendung festlegen.

## Verwendung

```php
$setApplicationCommandPermissions[guildID/global;ID;...perms]
```

## Verwendung

| Feld           | Typ                      | Beschreibung                                                                                | Erforderlich |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------- |:------------:|
| guildID/global | ganzzahlige Zeichenkette | Typ des Anwendungs-Befehls. <br/> 1. **global** <br/> 2. **bestimmte GildenID** |     wahr     |
| ID             | ganze Zahl               | Anwendungskommando-ID.                                                                      |     wahr     |
| ...Perms       | string                   | Berechtigungen zum Ändern.                                                                  |     wahr     |