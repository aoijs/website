---
title: '$timeoutMember'
description: '$timeoutMember wird ein bestimmtes Mitglied mit Discord''s Timeout Funktion Timeout Timeout verwenden.'
id: timeoutMember
---

`$timeoutMember` wird ein bestimmtes Mitglied mit Discords Timeout Funktion Timeout ausgeben.

## Verwendung

```php
$timeoutMember[guildID;memberID;timer;timeoutEndsAt?;reason?]
```

## Verwendung

| Feld           | Typ            | Beschreibung                                                                                         | Erforderlich |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------------- |:------------:|
| guildID        | ganze Zahl     | Die Gilden-ID, wo sich das Mitglied befindet.                                                        |     wahr     |
| memberID       | ganze Zahl     | Die ID des Benutzers, der Timeouted wird.                                                            |     wahr     |
| timer          | string, Nummer | Die Dauer des Timeout.                                                                               |     wahr     |
| timeoutEndsAt? | boolean        | Gibt Zeit zurück, wenn Timeout endet.  <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |
| warum?         | string         | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird.                                    |    falsch    |

## Beispiel(e)

Dies wird ein bestimmtes Mitglied für fünf Minuten Timeout machen:

```javascript
bot.command({
    name: 'timeoutMember',
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```