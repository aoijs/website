---
title: '$renameFile'
description: '$renameFile will rename a file of your bot''s directory.'
id: renameFile
---

`$renameFile` will rename a file of your bot's directory.

## Використання

```php
$renameFile[oldFile;newFile]
```

## Параметри

| Поле    | Тип   | Опис           | Обов'язковий |
| ------- | ----- | -------------- |:------------:|
| oldFile | рядок | Old file name. |     так      |
| newFile | рядок | New file name. |     так      |

## Приклад(и)

This will change your index.js to a index.txt file:

```javascript
bot.command({
    name: "renameFile",
    code: `
    $renameFile[./index.js;./index.txt]
    `
});
```