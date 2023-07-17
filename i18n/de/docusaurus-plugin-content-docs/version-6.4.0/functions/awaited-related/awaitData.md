---
title: $awaitData
description: '$awaitData wird die in den erwarteten Befehlen angegebenen Daten zurückgeben.'
id: awaitData
---

`$awaitData` werden erwartete Daten in erwarteten Befehlen zurückgeben.

## Verwendung

```php
$awaitData[name]
```

## Parameter

| Feld | Typ    | Beschreibung          | Erforderlich |
| ---- | ------ | --------------------- |:------------:|
| name | string | Gewarteter Datenname. |     wahr     |

## Beispiel(e)

Dies gibt die ID jedes Server-Mitglieds zurück und melde sie in deiner Konsole an:

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

bot. waitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , is one out of $awaitData[members] members ]
  `
});
```
