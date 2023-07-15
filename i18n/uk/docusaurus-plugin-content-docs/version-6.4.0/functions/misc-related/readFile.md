---
title: '$readFile'
description: '$readFile will read a file''s content and return it.'
id: readFile
---

`$readFile` will read a file's content and return it.

## Використання

```php
$readFile[path]
```

## Параметри

| Поле | Тип   | Опис       | Обов'язковий |
| ---- | ----- | ---------- |:------------:|
| path | рядок | File path. |     так      |

## Приклад(и)

This will return your main file (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```