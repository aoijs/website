---
title: $ban
description: '$ban wird einen Benutzer einer bestimmten Gilde bannen.'
id: ban
---

`$ban` wird einen Benutzer einer Gilde bannen.

## Verwendung

```php
$ban[guildID;userID;days?;reason?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                  | Erforderlich |
| -------- | ---------- | ----------------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Von welcher Gilde der Benutzer gebannt werden soll.                           |     wahr     |
| userID   | ganze Zahl | Der zu sperrende Benutzer.                                                    |     wahr     |
| tagen?   | string     | Zu löschende Tage des Nachrichtenverlaufs, können nicht höher als 7 Tage sein |    falsch    |
| warum?   | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird.             |    falsch    |

## Beispiel(e)

Dies wird einen zufälligen Benutzer deiner Gilde bannen:

```javascript
bot.command({
    name: 'ban',
    code: `
  $ban[$guildID;$randomUserID;7;Imagine getting banned.]
  `
});
```
