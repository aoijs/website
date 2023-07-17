---
title: '$userBannerColor'
description: '$userBannerColor devolverá el color del estandarte del perfil.'
id: userBannerColor
---

`$userBannerColor` devolverá el color del rol dado.

## Uso

```php
$userBannerColor[usuarioID?]
```

## Parámetros

| Campo     | Tipo   | Parámetros         | Requerido |
| --------- | ------ | ------------------ |:---------:|
| usarioID? | entero | El ID del usuario. |   falso   |

## Ejemplo(s)

Esto devolverá el color de tu banner de perfil (si existe):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBannerColor[$authorID]
  `
});
```
