---
title: $renameFile
description: '$renameFile перейменує файл директорії вашого бота.'
id: renameFile
---

`$renameFile` перейменує файл директорії вашого бота.

## Використання

```php
$renameFile[oldFile;newFile]
```

## Параметри

| Поле    | Тип   | Опис              | Обов'язковий |
| ------- | ----- | ----------------- |:------------:|
| oldFile | рядок | Старе ім'я файлу. |     так      |
| newFile | рядок | Нове ім'я файлу.  |     так      |

## Приклад(и)

Це змінить ваш index.js на файл index.txt:

```javascript
bot.command({
    name: "renameFile",
    код: `
    $renameFile[./index.js;./index.txt]
    `
});
```