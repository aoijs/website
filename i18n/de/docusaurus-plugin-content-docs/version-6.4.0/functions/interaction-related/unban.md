---
title: $unban
description: '$unban wird einen bestimmten Benutzer entbannen.'
id: unban
---

`$unban` wird einen bestimmten Benutzer entbannen.

## Verwendung

```php
$unban[guildID;userID;reason?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                                                    | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------------------------------------- |:------------:|
| guildID | ganze Zahl | Die Gilden-ID, wo der Benutzer gesperrt wird.                                                   |     wahr     |
| userID  | ganze Zahl | Die ID des Benutzers, der entbannt wird.                                                        |     wahr     |
| warum?  | string     | Der Grund für die Aufhebung des Verbots, die in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Dies wird einen bestimmten Benutzer entbannen:

```javascript
bot.command({
    Name: 'unban',
    Code: `
  $unban[$guildID;$randomUserID;Some reason.]
  `
});
```