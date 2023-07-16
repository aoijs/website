---
title: $removeApplicationCommandPermissions
description: '$removeApplicationCommandPermissions wird Berechtigungen eines Benutzers oder einer Rolle einer bestimmten Anwendung entfernen.'
id: removeApplicationCommandPermissions
---

`$removeApplicationCommandPermissions` wird Berechtigungen eines Benutzers oder einer Rolle einer bestimmten Anwendung entfernen.

## Verwendung

```php
$removeApplicationCommandPermissions[guildID/global;id;...roruIds]
```

## Verwendung

| Feld           | Typ                      | Beschreibung                                                                                | Erforderlich |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------- |:------------:|
| guildID/global | ganze Zahl               | Typ des Anwendungs-Befehls. <br/> 1. **global** <br/> 2. **bestimmte GildenID** |     wahr     |
| id             | ganze Zahl               | Die Applikationsbefehl ID zu ändern.                                                        |     wahr     |
| roruIds        | ganzzahlige Zeichenkette | Rollen oder Benutzer zum Ändern oder Entfernen von Berechtigungen durch Kommata aufgeteilt. |     wahr     |
