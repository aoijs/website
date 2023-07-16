---
title: '$getLeaderboardInfo'
description: '$getLeaderboardInfo liefert Informationen über eine bestimmte Variable in einer Rangliste sortiert.'
id: getLeaderboardInfo
---

`$getLeaderboardInfo` gibt Informationen über eine in einer Rangliste sortierte Variable zurück.

## Verwendung

```php
$getLeaderboardInfo[variable;id;type;option]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                                                                                  | Erforderlich |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |:------------:|
| varname   | string     | Variablenname.                                                                                                                |     wahr     |
| id        | ganze Zahl | User/Gild/Channel/Nachricht ID.                                                                                               |     wahr     |
| typ       | string     | Variablentyp <br /> 1. **globalUser** <br /> 2. **Benutzer** <br /> 3. **Server** <br /> 4. **Kanal** |     wahr     |
| variieren | string     | Option, um <br /> 1 zurückzugeben. **Top** (Standard) <br /> **Wert**                                             |     wahr     |

## Beispiel(e)

Dies wird die Position der aktuellen Gilde zurückgeben:

```javascript
bot.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$guildID;server;top]
    `
});
```