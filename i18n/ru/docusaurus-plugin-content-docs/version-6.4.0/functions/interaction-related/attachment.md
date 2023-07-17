---
title: $attachment
description: '$attachment создаст вложение.'
id: attachment
---

`$attachment` создаст вложение.

## Использование

```php
$attachment[attachment;name;type?]
```

## Параметры

| Название | Nbg    | Описание                                             | Нужно |
| -------- | ------ | ---------------------------------------------------- |:-----:|
| вложение | строка | Содержимое вложения, предпочтительно URL.            |  да   |
| название | строка | Название вложения.                                   |  да   |
| nbg?     | строка | Тип вложения. <br /> 1. **URL** (по умолчанию) | ложь  |

## Пример(ы)

Это создаст вложение:

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
