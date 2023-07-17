---
title: $isChannelManageable
description: '$isChannelManageable wird prüfen, ob der Kanal verwaltbar ist oder nicht.'
id: isChannelManageable
---

`$isChannelManageable` wird überprüfen, ob der Kanal verwaltbar ist oder nicht.

## Verwendung

```php
$isChannelManageable[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                             | Erforderlich |
| ---------- | ---------- | ------------------------------------------------------------------------ |:------------:|
| channelID? | ganze Zahl | ID des Kanals, um zu überprüfen, ob der Kanal verwaltbar ist oder nicht. |    falsch    |

## Beispiel(e)

Dies gibt `true` oder `false` zurück, je nachdem, ob der Kanal, in dem der Befehl ausgeführt wird, verwaltbar ist:

```javascript
bot.command({
    name: 'isChannelManageable',
    code: `
  $isChannelManageable[$channelID]
  `
});
```
