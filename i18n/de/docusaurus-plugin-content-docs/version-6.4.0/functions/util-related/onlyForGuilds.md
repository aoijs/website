---
title: '$onlyForGuilds'
description: '$onlyForGuilds wird überprüfen, ob der Befehl in einer der aufgeführten Gilden ausgeführt wurde, und falls nicht, eine Fehlermeldung zurückgeben.'
id: onlyForGuilds
---

`$onlyForGuilds` prüft, ob der Befehl in einer der aufgeführten Gilden ausgeführt wurde und gibt eine Fehlermeldung zurück.

## Verwendung

```php
$onlyForGuilds[...guildIds;error]
```

## Verwendung

| Feld        | Typ              | Beschreibung                                                                                 | Erforderlich |
| ----------- | ---------------- | -------------------------------------------------------------------------------------------- |:------------:|
| ...guildIds | string, Ganzzahl | Gilden, auf die Sie den Befehl beschränken möchten.                                          |     wahr     |
| fehlerhaft  | string           | Fehler bei der Rückgabe, wenn der Befehl in keiner der aufgeführten Gilden ausgeführt wurde. |     wahr     |

## Beispiel(e)

Dies beschränkt den Befehl nur auf die aufgeführten Gilden:

```javascript
bot.command({
    name: "onlyForGuilds",
    code: `
    Ok.
    $onlyForGuilds[guildID;guildID;You can't use that command here!]
    `
});
```