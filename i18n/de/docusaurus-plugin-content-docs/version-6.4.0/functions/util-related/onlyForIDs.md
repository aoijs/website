---
title: '$onlyForIDs'
description: '$onlyForIDs wird überprüfen, ob der Befehl von einem Benutzer der aufgelisteten Benutzer-IDs ausgeführt wurde, und wenn nicht, einen Fehler zurückgeben.'
id: onlyForIDs
---

`$onlyForIDs` wird überprüfen, ob der Befehl von einem Benutzer der aufgelisteten Benutzer-IDs ausgeführt wurde, und einen Fehler zurückgeben.

## Verwendung

```php
$onlyForIDs[...userIds;error]
```

## Verwendung

| Feld       | Typ              | Beschreibung                                                                                             | Erforderlich |
| ---------- | ---------------- | -------------------------------------------------------------------------------------------------------- |:------------:|
| ...UserIds | string, Ganzzahl | Benutzer, auf die Sie den Befehl beschränken möchten.                                                    |     wahr     |
| fehlerhaft | string           | Fehler bei der Rückgabe, wenn der Befehl nicht von und von den aufgelisteten Benutzern ausgeführt wurde. |     wahr     |

## Beispiel(e)

Dies beschränkt den Befehl nur auf Bot-Entwickler:

```javascript
bot.command({
    name: "onlyForIDs",
    code: `
    Ok.
    $onlyForIDs[$botOwnerID;You can't use that command!]
    `
});
```