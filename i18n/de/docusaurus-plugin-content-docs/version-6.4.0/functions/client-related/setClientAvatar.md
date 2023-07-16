---
title: '$setClientAvatar'
description: '$setClientAvatar ändert den Avatar der Kunden.'
id: setClientAvatar
---

`$setClientAvatar` wird den Avatar der Kunden ändern.

## Verwendung

```php
$setClientAvatar[URL]
```

## Verwendung

| Feld | Typ    | Beschreibung         | Erforderlich |
| ---- | ------ | -------------------- |:------------:|
| URL  | string | Die neue Avatar-URL. |     wahr     |

## Beispiel(e)

Hiermit wird der Avatar des Clients zum Avatar des Benutzers des Autors geändert:

```javascript
bot.command({
    name: 'setClientAvatar',
    code: `
   $setClientAvatar[$userAvatar[$authorID]]`
});
```