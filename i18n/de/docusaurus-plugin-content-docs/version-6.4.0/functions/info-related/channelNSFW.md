---
title: '$channelNSFW'
description: '$channelNSFW gibt true oder false zurück, je nachdem, ob der angegebene Kanal als NSFW markiert ist oder nicht.'
id: channelNSFW
---

`$channelNSFW` wird true oder false zurückgeben, abhängig davon, ob der angegebene Kanal als NSFW markiert ist oder nicht.

## Verwendung

```php
$channelNSFW[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                                       | Erforderlich |
| ---------- | ---------- | ---------------------------------------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | ID des Kanals, den Sie überprüfen möchten, ob er als NSFW markiert ist oder nicht. |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob der Kanal, in dem der Befehl ausgeführt wird, als NSFW oder markiert ist:

```javascript
bot.command({
    name: 'channelNSFW',
    code: `
  $channelNSFW[$channelID]
  `
});
```