---
title: '$boostingSince'
description: '$boostingSince wird das Startdatum von jemandem zurückgeben, der eine bestimmte Gilde stärkt.'
id: boostingSince
---

`$boostingSince` wird das Startdatum von jemandem, der eine bestimmte Gilde erhöht, zurückgeben.

## Verwendung

```php
$boostingSince[guildID?;userID?;format?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                          | Erforderlich |
| ------------ | ---------- | --------------------------------------------------------------------- |:------------:|
| guildID?     | ganze Zahl | Die ID der Gilde, wo du sehen willst, wie lange jemand getrieben hat. |    falsch    |
| userID?      | ganze Zahl | Die Benutzer-ID, von der Sie das Startdatum überprüfen möchten.       |    falsch    |
| formatieren? | string     | Das Format, in dem das Datum zurückgegeben wird, unten aufgelistet.   |    falsch    |

| Format |                                                               |
| ------ | ------------------------------------------------------------- |
| M      | 1652643158052                                                 |
| datum  | Sonntag 15. Mai 2022 20:32:38 GMT+0100 (britische Sommerzeit) |

## Beispiel(e)

Dies gibt das Datum zurück, an dem Sie mit dem Boosten begonnen haben (funktioniert nicht, wenn Sie nicht boosten):

```javascript
bot.command({
    name: 'boostingSince',
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```