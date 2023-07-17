---
title: '$setClientName'
description: '$setClientName ändert den Discord Nutzernamen.'
id: setClientName
---

`$setClientName` wird den Discord Benutzernamen der Kunden ändern.

## Verwendung

```php
$setClientName[username]
```

## Verwendung

| Feld         | Typ    | Beschreibung                  | Erforderlich |
| ------------ | ------ | ----------------------------- |:------------:|
| benutzername | string | Der neue Client-Benutzername. |     wahr     |

## Beispiel(e)

Dies ändert den Benutzernamen des Clients auf den Benutzernamen des Befehlsautors:

```javascript
bot.command({
    name: 'setClientName',
    code: `
   $setClientName[$username[$authorID]]`
});
```