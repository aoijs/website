---
title: $onlyNSFW
description: '$onlyNSFW wird überprüfen, ob der Befehl in einem NSFW-Kanal ausgeführt wurde und wenn nicht, eine Fehlermeldung zurückgeben.'
id: onlyNSFW
---

`$onlyNSFW` prüft, ob der Befehl in einem NSFW-Kanal ausgeführt wurde und gibt eine Fehlermeldung zurück.

## Verwendung

```php
$onlyNSFW[error?]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                                                       | Erforderlich |
| ---------- | ------ | ---------------------------------------------------------------------------------- |:------------:|
| fehlerhaft | string | Fehler beim Rückgeben, wenn der Befehl nicht in einem NSFW-Kanal ausgeführt wurde. |     wahr     |

## Beispiel(e)

Dies beschränkt den Befehl nur auf NSFW-Kanäle:

```javascript
bot.command({
    name: "onlyNSFW",
    code: `
    Ok.
    $onlyNSFW[You can't use that command here!]
    `
});
```