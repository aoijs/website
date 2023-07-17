---
title: $userBannerColor
description: '$userBannerColor вернёт цвет баннера профиля.'
id: userBannerColor
---

`$userBannerColor` вернет цвет баннера профиля.

## Использование

```php
$userBannerColor[userID?]
```

## Параметры

| Название         | Nbg   | Описание         | Нужно |
| ---------------- | ----- | ---------------- |:-----:|
| ID пользователя? | целое | ID пользователя. | false |

## Пример(ы)

Это вернет цвет баннера вашего профиля (если таковые имеются):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBannerColor[$authorID]
  `
});
```
