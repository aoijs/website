---
title: '$setUserNickname'
description: '$setUserNickname ändert den Nicknamen eines Gildenmitglieds.'
id: setUserNickname
---

`$setUserNickname` ändert den Nicknamen eines Gildenmitglieds.

## Verwendung

```php
$setUserNickname[userID;newName;reason?]
```

## Verwendung

| Feld    | Typ            | Beschreibung                                                         | Erforderlich |
| ------- | -------------- | -------------------------------------------------------------------- |:------------:|
| userID  | ganze Zahl     | Die Benutzer-ID des Benutzers, dessen Nickname geändert werden soll. |     wahr     |
| newName | string, Nummer | Ihr neuer Spitzname.                                                 |     wahr     |
| warum?  | string, Nummer | Begründung, die im Audit-Log der Gilde angezeigt wird.               |    falsch    |

## Beispiel(e)

Dies ändert deinen Nicknamen in "Ich liebe aoi.js": (funktioniert nicht, wenn du der Besitzer der Gilde bist)

```javascript
bot.command({
    name: 'setUserNickname',
    code: `
  $setUserNickname[$authorID;I love aoi.js;They simply love aoi.js]
  `
});
```
