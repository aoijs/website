---
title: $readFile
description: '$readFile прочитает содержимое файла и вернёт его.'
id: readFile
---

`$readFile` прочтёт содержимое файла и возвращает его.

## Использование

```php
$readFile[path]
```

## Параметры

| Название | Nbg    | Описание      | Нужно |
| -------- | ------ | ------------- |:-----:|
| путь     | строка | Путь к файлу. |  да   |

## Пример(ы)

Это вернет ваш основной файл (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```