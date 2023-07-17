---
title: '$isValidLink'
description: '$isValidLink wird prüfen, ob der angegebene Link gültig ist.'
id: isValidLink
---

`$isValidLink` wird überprüfen, ob der angegebene Link gültig ist.

## Verwendung

```php
$isValidLink[URL]
```

## Verwendung

| Feld | Typ    | Beschreibung      | Erforderlich |
| ---- | ------ | ----------------- |:------------:|
| URL  | string | Jede Art von URL. |     wahr     |

## Beispiel(e)

Dies wird `true` zurückgeben, da der angegebene Link gültig ist:

```javascript
bot.command({
    name: 'isValidLink',
    code: `
  $isValidLink[https://aoi.js.org/docs/]
  `
});
```
