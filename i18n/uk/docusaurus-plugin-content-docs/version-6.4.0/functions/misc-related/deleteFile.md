---
title: $deleteFile
description: '$deleteFile видалить заданий файл.'
id: deleteFile
---

`$deleteFile` видалить даний файл.

## Використання

```php
$deleteFile[path]
```

## Параметри

| Поле | Тип   | Опис           | Обов'язковий |
| ---- | ----- | -------------- |:------------:|
| шлях | рядок | Шлях до файлу. |     так      |

## Приклад(и)

Це призведе до видалення вашого `index.js` (не насправді до цього):

```javascript
bot.command({
    name: "deleteFile",
    код: `
  $deleteFile[./index.js]
  `
});
```