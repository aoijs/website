---
title: $userBannerColor
description: '$userBannerColor gibt die Profilfarbe zurück.'
id: userBannerColor
---

`$userBannerColor` gibt die Profil-Bannerfarbe zurück.

## Verwendung

```php
$userBannerColor[userID?]
```

## Verwendung

| Feld    | Typ        | Beschreibung          | Erforderlich |
| ------- | ---------- | --------------------- |:------------:|
| userID? | ganze Zahl | Die ID des Benutzers. |    falsch    |

## Beispiel(e)

Dies gibt die Farbe Ihres Profil-Banners zurück (falls vorhanden):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBannerColor[$authorID]
  `
});
```
