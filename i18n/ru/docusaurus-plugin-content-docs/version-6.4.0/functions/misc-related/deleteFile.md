---
title: $deleteFile
description: '$deleteFile удалит заданный файл.'
id: deleteFile
---

`$deleteFile` удалит данный файл.

## Использование

```php
$deleteFile[path]
```

## Параметры

| Название | Nbg    | Описание      | Нужно |
| -------- | ------ | ------------- |:-----:|
| путь     | строка | Путь к файлу. |  да   |

## Пример(ы)

Это удалит ваш `index.js` (не делайте это):

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```