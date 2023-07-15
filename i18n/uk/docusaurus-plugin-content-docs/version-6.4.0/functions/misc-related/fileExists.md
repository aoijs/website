---
title: '$fileExists'
description: '$fileExists will check if a given file exists.'
id: fileExists
---

`$fileExists` will check if a given file exists.

## Використання

```php
$fileExists[path]
```

## Параметри

| Поле | Тип   | Опис       | Обов'язковий |
| ---- | ----- | ---------- |:------------:|
| path | рядок | File path. |     так      |

## Приклад(и)

This will check if a file called `index.js` exists in your directory:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```