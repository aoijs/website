---
title: $memberExists
description: '$memberExists überprüfen, ob ein bestimmter Benutzer Mitglied der angegebenen Gilde ist.'
id: memberExists
---

`$memberExists` überprüfen, ob ein bestimmter Benutzer Mitglied der angegebenen Gilde ist.

## Verwendung

```php
$memberExists[userID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                     | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------------------------------------ | ------------ |
| userID   | ganze Zahl | id des Benutzers, den du überprüfen möchtest, ob er derzeit Mitglied des angegebenen Servers ist | wahr         |
| guildID? | ganze Zahl | der Server, in dem der Benutzer vorhanden ist                                                    | falsch       |

## Beispiel(e)

Dies gibt `true` zurück, da du derzeit in dieser Gilde bist:

```javascript
bot.command({
    name: 'memberExists',
    code: `
  $memberExists[$authorid;$guildID]
  `
});
```
