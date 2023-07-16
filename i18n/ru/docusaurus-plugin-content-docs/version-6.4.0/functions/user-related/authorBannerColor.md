---
title: $authorBannerColor
description: '$authorBannerColor вернет цвет баннера в профиль автора команды.'
id: authorBannerColor
---

`$authorBannerColor` вернет цвет баннера профиля автора команды.

## Использование

```php
$authorBannerColor
```

## Пример(ы)

Это вернет цвет баннера вашего профиля (если таковые имеются):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $authorBannerColor
  `
});
```
