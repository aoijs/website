---
title: $createRole
description: '$createRole wird eine neue Gildenrolle erstellen.'
id: createRole
---

`$createRole` wird eine neue Gildenrolle erstellen.

## Verwendung

```php
$createRole[guildID;returnID;name;color;icon;hoist;unicodeEmoji;position;mentionable;...permissions]
```

## Verwendung

| Feld              | Typ        | Beschreibung                                      | Erforderlich |
| ----------------- | ---------- | ------------------------------------------------- |:------------:|
| guildID           | ganze Zahl | Die ID der Gilde, in der die Rolle erstellt wird. |     wahr     |
| return ID         | boolean    | ID der neu erstellten Rolle zurückgeben?          |     wahr     |
| name              | string     | Der Name der neuen Rolle.                         |     wahr     |
| farben            | ganze Zahl | Die Farbe der neuen Rolle.                        |     wahr     |
| symbol            | string     | Die Bild-URL, die als Symbol verwendet wird.      |    falsch    |
| haufen            | boolean    | Wenn die neue Rolle getrieben werden sollte.      |     wahr     |
| unicodeEmoji      | string     | Das unicodeEmoji, das als Symbol verwendet wird.  |    falsch    |
| position          | ganze Zahl | Die Position der Rolle, 1 ist die untere.         |     wahr     |
| erwähnbar         | boolean    | Wenn die Rolle von `@everyone` erwähnt wird.      |     wahr     |
| ...Berechtigungen | string     | Berechtigungen, die die Rolle haben wird.         |    falsch    |

## Beispiel(e)

Dies wird eine neue Rolle namens "Vogel" in der Farbe rot erstellen:

```javascript
bot.command({
    name: 'createRole',
    code: `
    $createRole[$guildID;false;Bird;FF0000;;false;❤;1;false;sendmessages]`
});
```
