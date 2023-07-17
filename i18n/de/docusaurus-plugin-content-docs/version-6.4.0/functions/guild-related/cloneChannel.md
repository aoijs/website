---
title: '$cloneChannel'
description: '$cloneChannel wird einen Kanal klonen.'
id: cloneChannel
---

`$cloneChannel` wird einen Kanal klonen.

## Verwendung

```php
$cloneChannel[channelID;name;returnID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                          | Erforderlich |
| ---------- | ---------- | --------------------------------------------------------------------- |:------------:|
| channelID  | ganze Zahl | Die ID des Kanals, der geklont werden soll.                           |     wahr     |
| name       | string     | Der neue Name des geklonten Kanals.                                   |     wahr     |
| return ID? | string     | Falls die Funktion die ID des neu erstellten Kanals zurückgeben soll. |    falsch    |

**Es wird keine Nachrichten dieses Kanals klonen.**

## Beispiel(e)

Dies klont den aktuellen Kanal und benennt ihn "neuen Kanal":

```javascript
bot.command({
    name: 'cloneChannel',
    code: `
  $cloneChannel[$channelID;new channel;false]
  `
});
```
