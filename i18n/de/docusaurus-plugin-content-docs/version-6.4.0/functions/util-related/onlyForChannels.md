---
title: $onlyForChannels
description: '$onlyForChannels wird überprüfen, ob der Befehl in einem der aufgelisteten Kanäle ausgeführt wurde, und falls nicht, eine Fehlermeldung zurückgeben.'
id: onlyForChannels
---

`$onlyForChannels` wird überprüfen, ob der Befehl in einem der aufgelisteten Kanäle ausgeführt wurde und eine Fehlermeldung zurückgeben, ob nicht.

## Verwendung

```php
$onlyForChannels[...categoryIds;error]
```

## Verwendung

| Feld          | Typ              | Beschreibung                                                                                  | Erforderlich |
| ------------- | ---------------- | --------------------------------------------------------------------------------------------- |:------------:|
| ...ChannelIds | string, Ganzzahl | Kanäle, auf die Sie den Befehl beschränken möchten.                                           |     wahr     |
| fehlerhaft    | string           | Fehler bei der Rückgabe, wenn der Befehl in keinem der aufgelisteten Kanäle ausgeführt wurde. |     wahr     |

## Beispiel(e)

Dies beschränkt den Befehl nur auf die aufgelisteten Kanäle:

```javascript
bot.command({
    name: "onlyForChannels",
    code: `
    Ok.
    $onlyForChannels[channelID;channelID;You can't use that command here!]
    `
});
```