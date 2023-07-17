---
title: $authorBannerColor
description: '$authorBannerColor gibt die Profil-Banner-Farbe des Befehlsautors zurück.'
id: authorBannerColor
---

`$authorBannerColor` gibt die Farbe des Profil-Banners des Befehlsautors zurück.

## Verwendung

```php
$authorBannerColor
```

## Beispiel(e)

Dies gibt die Farbe Ihres Profil-Banners zurück (falls vorhanden):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $authorBannerColor
  `
});
```
