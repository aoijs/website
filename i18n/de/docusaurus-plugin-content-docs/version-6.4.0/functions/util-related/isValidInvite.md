---
title: '$isValidInvite'
description: '$isValidInvite wird prüfen, ob die angegebene Einladung gültig ist.'
id: isValidInvite
---

`$isValidInvite` wird überprüfen, ob die angegebene Einladung gültig ist.

## Verwendung

```php
$isValidInvite[inviteResolver]
```

## Verwendung

| Feld           | Typ    | Beschreibung           | Erforderlich |
| -------------- | ------ | ---------------------- |:------------:|
| inviteResolver | string | Gildeneinladungs-Link. |     wahr     |

## Beispiel(e)

Dies gibt `true` als `https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102` ist eine gültige Einladung:

```javascript
bot.command({
    name: 'isValidInvite',
    code: `
  $isValidInvite[https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102]
  `
});
```
