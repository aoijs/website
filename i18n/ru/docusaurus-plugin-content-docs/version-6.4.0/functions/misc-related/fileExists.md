---
title: $fileExists
description: '$fileExists будет проверять, существует ли данный файл.'
id: fileExists
---

`$fileExists` проверит наличие данного файла.

## Использование

```php
$fileExists[path]
```

## Параметры

| Название | Nbg    | Описание      | Нужно |
| -------- | ------ | ------------- |:-----:|
| путь     | строка | Путь к файлу. |  да   |

## Пример(ы)

Проверяет, существует ли в вашей папке файл `index.js`:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```