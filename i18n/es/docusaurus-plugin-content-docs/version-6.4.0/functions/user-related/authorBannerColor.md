---
title: '$authorBannerColor'
description: '$authorBannerColor devolverá el color del banner del perfil del autor del comando.'
id: authorBannerColor
---

`$authorBannerColor` devolverá el color del banner del perfil del autor del comando.

## Uso

```php
$authorBannerColor
```

## Ejemplo(s)

Esto devolverá el color de tu banner de perfil (si existe):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $authorBannerColor
  `
});
```
