---
title: '$appendFile'
description: '$appendFile will add given text to a specific file.'
id: appendFile
---

`$appendFile` will add given text to a specific file.

## Використання

```php
$appendFile[path;content;encode?]
```

## Параметри

| Поле    | Тип            | Опис                                           | Обов'язковий |
| ------- | -------------- | ---------------------------------------------- |:------------:|
| path    | рядок          | File location.                                 |     так      |
| content | string, number | Content to append to the file                  |     так      |
| encode? | рядок          | Encode type <br /> 1. **utf8** (default) |      ні      |

## Приклад(и)

This will add a comment to your main file:

```javascript
bot.command({
    name: 'appendFile',
    code: `
  $appendFile[./index.js;// Hello!]
  `
});
```