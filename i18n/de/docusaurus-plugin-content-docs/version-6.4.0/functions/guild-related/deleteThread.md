---
title: $deleteThread
description: '$deleteThread wird einen bestimmten Thread eines Kanals löschen.'
id: deleteThread
---

`$deleteThread` löscht einen bestimmten Thread eines Kanals.

## Verwendung

```php
$deleteThread[channelID;threadID;reason?]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                      | Erforderlich |
| --------- | ---------- | ----------------------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die ID des Kanals, in dem der Thread existiert.                   |     wahr     |
| threadID  | ganze Zahl | Die Thread-ID.                                                    |     wahr     |
| warum?    | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Dies löscht einen Thread des Kanals, in dem Sie den Befehl ausführen ( Stellen Sie sicher, dass Sie ThreadID durch eine aktuelle ThreadID ersetzen):

```javascript
bot.command({
    Name: 'deleteThread',
    Code: `
  $deleteThread[$channelID;threadID;Crazy Example.]
  `
});
```