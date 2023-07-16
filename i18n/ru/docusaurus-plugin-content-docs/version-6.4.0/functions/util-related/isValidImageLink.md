---
title: '$isValidImageLink'
description: '$isValidImageLink проверит правильность указанной ссылки на изображение.'
id: isValidImageLink
---

`$isValidImageLink` проверит правильность ссылки на изображение.

## Использование

```php
$isValidImageLink[URL]
```

## Параметры

| Название | Nbg    | Описание                      | Нужно |
| -------- | ------ | ----------------------------- |:-----:|
| URL      | строка | Прямая ссылка на изображение. |  да   |

## Пример(ы)

Это приведет к возврату `true` , так как указанная ссылка на изображение действительна:

```javascript
bot.command({
    name: 'isValidImageLink',
    code: `
  $isValidImageLink[https://cdn.discordapp.com/attachments/832704676096245800/1058914808109486221/Screenshot_2022-12-31_at_8.08.57_PM.png]
  `
});
```
