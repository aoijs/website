---
title: '$findChannel'
description: '$findChannel durchsucht einen bestimmten Kanal nach seinem Namen.'
id: findChannel
---

`$findChannel` durchsucht einen bestimmten Kanal nach seinem Namen.

## Verwendung

```php
$findChannel[channelResolver;returnSelf?]
```

## Verwendung

| Feld            | Typ     | Beschreibung                                                                                                            | Erforderlich |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelResolver | string  | Name des Kanals nach dem gesucht werden soll.                                                                           |     wahr     |
| zurückkehren?   | boolean | Gibt den Kanal zurück, in dem der Befehl standardmäßig ausgeführt wird, wenn der angegebene Kanal nicht gefunden wurde. |    falsch    |

## Beispiel(e)

Dies wird `882360051640193054` zurückgeben, da es in der Lage war, den `#<unk> 本<unk> ,aoi_v5` Kanal zu finden:

```javascript
bot.command({
    name: 'findChannel',
    code: `
  $findChannel[⊂・⊃﹐aoi_v5;false]
  `
});
```
