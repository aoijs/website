---
title: $renameFile
description: '$renameFile переименует файл каталога вашего бота.'
id: renameFile
---

`$renameFile` переименует файл каталога вашего бота.

## Использование

```php
$renameFile[oldFile;newFile]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| oldFile  | строка | Старое имя файла. |  да   |
| newFile  | строка | Новое имя файла.  |  да   |

## Пример(ы)

Это изменит ваш index.js на файл index.txt:

```javascript
bot.command({
    name: "renameFile",
    code: `
    $renameFile[./index.js;./index.txt]
    `
});
```