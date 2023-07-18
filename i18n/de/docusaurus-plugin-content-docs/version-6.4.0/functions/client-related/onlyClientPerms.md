---
title: '$onlyClientPerms'
description: '$onlyClientPerms wird überprüfen, ob der Bot die aufgelistete Berechtigung hat und eine Fehlermeldung zurückgeben, falls nicht.'
id: onlyClientPerms
---

`$onlyClientPerms` wird überprüfen, ob der Bot die aufgeführte Berechtigung hat und wenn nicht, eine Fehlermeldung zurückgeben.

## Verwendung

```php
$onlyClientPerms[...perms;error]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                                                      | Erforderlich |
| ---------- | ------ | --------------------------------------------------------------------------------- |:------------:|
| ...Perms   | string | Berechtigung, die der Bot benötigt.                                               |     wahr     |
| fehlerhaft | string | Fehler bei der Rückgabe, wenn der Bot nicht die aufgelisteten Berechtigungen hat. |     wahr     |

Sie können alle Berechtigungen __[hier](../../guides/client/2permissionsintents.md)__ finden.

## Beispiel(e)

Dies wird den Befehl nur funktionieren, wenn der Bot über Administratorrechte verfügt:

```javascript
bot.command({
    name: "onlyClientPerms",
    code: `
    Ok.
    $onlyClientPerms[administrator;I don't have administrator permissions!]
    `
});
```
