---
title: '$isValidImageLink'
description: '$isValidImageLink wird prüfen, ob der angegebene Link gültig ist.'
id: isValidImageLink
---

`$isValidImageLink` wird überprüfen, ob der angegebene Link gültig ist.

## Verwendung

```php
$isValidImageLink[URL]
```

## Verwendung

| Feld | Typ    | Beschreibung            | Erforderlich |
| ---- | ------ | ----------------------- |:------------:|
| URL  | string | Link zum direkten Bild. |     wahr     |

## Beispiel(e)

Dies gibt `true` zurück, da der angegebene Bildlink gültig ist:

```javascript
bot.command({
    name: 'isValidImageLink',
    code: `
  $isValidImageLink[https://cdn.discordapp.com/attachments/832704676096245800/1058914808109486221/Screenshot_2022-12-31_at_8.08.57_PM.png]
  `
});
```
