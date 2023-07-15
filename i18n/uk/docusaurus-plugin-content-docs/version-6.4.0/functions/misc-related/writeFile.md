---
title: '$writeFile'
description: '$writeFile will create a new file in the bot''s directory.'
id: writeFile
---

`$writeFile` will create a new file in the bot's directory.

## Використання

```php
$writeFile[path;text;encoding?]
```

## Параметри

| Поле     | Тип   | Опис                                    | Обов'язковий |
| -------- | ----- | --------------------------------------- |:------------:|
| path     | рядок | Where to create the file.               |     так      |
| text     | рядок | What the content of the file should be. |     так      |
| encoding | рядок | Text/File encoding.                     |      ні      |

## Приклад(и)

This will a file called "testing.txt" with the content of "Hello!":

```javascript
bot.command({
    name: "writeFile",
    code: `
    $writeFile[./testing.txt;Hello!;utf8]
    `
});
```