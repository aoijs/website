---
title: '$addThreadMember'
description: '$addThreadMember wird ein Mitglied zu einem Thread hinzufügen.'
id: addThreadMember
---

`$addThreadMember` wird ein Mitglied zu einem Thread hinzufügen.

## Verwendung

```php
$addThreadMember[channelID;threadID;userID;reason]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                      | Erforderlich |
| --------- | ---------- | ----------------------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Kanal-ID, wo sich der Thread befindet.                            |     wahr     |
| threadID  | ganze Zahl | Die Thread-ID.                                                    |     wahr     |
| userID    | ganze Zahl | Der Benutzer, der dem Thread hinzugefügt werden soll.             |     wahr     |
| Grund     | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |     wahr     |

## Beispiel(e)

Dies wird einen Thread erstellen und zufälligen Benutzer hinzufügen:

```javascript
bot.command({
    name: 'addThreadMember',
    code: `
  $addThreadMember[$channelID;$get[id];$randomUserID;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
