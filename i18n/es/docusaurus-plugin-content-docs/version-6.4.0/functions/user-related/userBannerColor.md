---
title: '$userBannerColor'
description: '$userBannerColor will return the profile banner color.'
id: userBannerColor
---

`$userBannerColor` will return the profile banner color.

## Modo de uso

```php
$userBannerColor[userID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros         | Requerido |
| --------- | ------- | ------------------ |:---------:|
| usarioID? | integer | El ID del usuario. |    no     |

## Ejemplo(s)

This will return your profile banner color (if any):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBannerColor[$authorID]
  `
});
```
