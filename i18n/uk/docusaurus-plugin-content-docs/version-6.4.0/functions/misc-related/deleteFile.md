---
title: '$deleteFile'
description: '$deleteFile will delete a given file.'
id: deleteFile
---

`$deleteFile` will delete a given file.

## Використання

```php
$deleteFile[path]
```

## Параметри

| Поле | Тип   | Опис       | Обов'язковий |
| ---- | ----- | ---------- |:------------:|
| path | рядок | File path. |     так      |

## Приклад(и)

This will delete your `index.js` (don't actually do that):

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```