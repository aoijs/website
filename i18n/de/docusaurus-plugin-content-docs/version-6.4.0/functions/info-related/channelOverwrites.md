---
title: '$channelOverwrites'
description: '$channelOverwrites gibt die Überschreibungen des angegebenen Kanals zurück.'
id: channelOverwrites
---

`$channelOverwrites` gibt die Überschreibungen des angegebenen Kanals zurück.

## Verwendung

```php
$channelOverwrites[channelID?;response?;sep?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                                        | Erforderlich |
| ---------- | ---------- | ----------------------------------------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | ID des Kanals, von dem der Kanal überschrieben werden soll.                         |    falsch    |
| antworten? | string     | Das Format, in dem der Kanal überschrieben wird, wird zurückgegeben.                |    falsch    |
| sep?       | string     | Das Trennzeichen zum Aufteilen des Kanals wird überschrieben, wenn es mehrere gibt. |    falsch    |

|     Typ     | Ausgang                                  |
|:-----------:| ---------------------------------------- |
| `{mention}` | Erwähnt die Rolle oder den Benutzer      |
|  `{type}`   | Gibt den Typ, Benutzer oder Rolle zurück |
|  `{allow}`  | Die erteilten Berechtigungen             |
|  `{deny}`   | Die verweigerten Berechtigungen          |

## Beispiel(e)

Dadurch wird der Kanal überschrieben, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'channelOverwrites',
    code: `
  $channelOverwrites[$channelID;{mention} {type} {allow} {deny};, ]
  `
});
```