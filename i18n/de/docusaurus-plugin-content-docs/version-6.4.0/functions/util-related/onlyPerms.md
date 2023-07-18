---
title: '$onlyPerms'
description: '$onlyPerms wird überprüfen, ob der Benutzer die aufgeführte Berechtigung hat und eine Fehlermeldung zurückgeben, falls nicht.'
id: onlyPerms
---

`$onlyPerms` wird überprüfen, ob der Benutzer die aufgeführte Berechtigung hat und wenn nicht, eine Fehlermeldung zurückgeben.

## Verwendung

```php
$onlyPerms[...perms;error]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                                                           | Erforderlich |
| ---------- | ------ | -------------------------------------------------------------------------------------- |:------------:|
| ...Perms   | string | Berechtigung, die der Benutzer benötigt.                                               |     wahr     |
| fehlerhaft | string | Fehler bei der Rückgabe, wenn der Benutzer nicht die aufgelisteten Berechtigungen hat. |     wahr     |

Sie können alle Berechtigungen __[hier](../../guides/client/2permissionsintents.md)__ finden.

## Beispiel(e)

Dies wird den Befehl nur funktionieren, wenn der Benutzer über Administratorrechte verfügt:

```javascript
bot.command({
    name: "onlyPerms",
    code: `
    Ok.
    $onlyPerms[administrator;You don't have administrator permissions!]
    `
});
```