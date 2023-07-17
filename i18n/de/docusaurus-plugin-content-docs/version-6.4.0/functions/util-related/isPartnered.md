---
title: $isPartnered
description: '$isPartnered prüft, ob die angegebene Gilde mit Discord verbunden ist.'
id: isPartnered
---

`$isPartnered` prüft, ob die angegebene Gilde mit Discord verbunden ist.

## Verwendung

```php
$isPartnered[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                      | Erforderlich |
| -------- | ---------- | --------------------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde, für die du den Status deiner Partnerschaft überprüfen möchtest. |     wahr     |

## Beispiel(e)

Dies wird überprüft, ob Ihr Server Partner ist und entweder `true` oder `false` zurückgibt:

```javascript
bot.command({
    name: 'isPartnered',
    code: `
  $isPartnered[$guildID]
  `
});
```
