---
title: '$onlyForRoles'
description: '$onlyForRoles wird überprüfen, ob der Benutzer, der den Befehl ausgeführt hat, eine der aufgeführten Rollen hat und falls nicht, eine Fehlermeldung zurückgeben.'
id: onlyForRoles
---

`$onlyForRoles` wird überprüfen, ob der Benutzer, der den Befehl ausgeführt hat, eine der aufgeführten Rollen hat und falls nicht, eine Fehlermeldung zurückgeben.

## Verwendung

```php
$onlyForRoles[...roleIds;error]
```

## Verwendung

| Feld       | Typ              | Beschreibung                                                                                              | Erforderlich |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------------- |:------------:|
| ...roleIds | string, Ganzzahl | Rollen, auf die Sie den Befehl beschränken möchten.                                                       |     wahr     |
| fehlerhaft | string           | Fehler beim Rückgeben, wenn der Befehl von keinem Benutzer mit den aufgelisteten Rollen ausgeführt wurde. |    falsch    |

## Beispiel(e)

Dies beschränkt den Befehl nur auf die aufgelisteten Kanäle:

```javascript
bot.command({
    name: "onlyForRoles",
    code: `
    Ok.
    $onlyForRoles[roleID;roleID;You can't use that command!]
    `
});
```