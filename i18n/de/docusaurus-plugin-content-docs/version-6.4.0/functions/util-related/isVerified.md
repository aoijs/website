---
title: $isVerified
description: '$isVerified prüft, ob die angegebene Gilde von Discord verifiziert wurde.'
id: isVerified
---

`$isVerified` prüft, ob die angegebene Gilde von Discord verifiziert wurde.

## Verwendung

```php
$isVerified[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                        | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde, wo ihr den Verifizierungsstatus überprüfen wollt. |    falsch    |

## Beispiel(e)

Wird überprüft, ob Ihr Server verifiziert ist und entweder `true` oder `false` zurückgibt:

```javascript
bot.command({
    name: 'isVerified',
    code: `
  $isVerified[$guildID]
  `
});
```
