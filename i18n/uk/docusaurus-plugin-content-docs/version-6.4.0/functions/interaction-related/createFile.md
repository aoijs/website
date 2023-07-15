---
title: '$createFile'
description: '$createFile will create a file attachment.'
id: createFile
---

`$createFile` will create a file attachment.

## Використання

```php
$createFile[attachment;name]
```

## Параметри

| Поле       | Тип   | Опис                        | Обов'язковий |
| ---------- | ----- | --------------------------- |:------------:|
| attachment | рядок | Content of the file.        |     так      |
| назва      | рядок | The name of the attachment. |     так      |

## Приклад(и)

This will create a text file called **`example.txt`** with the text "This is an example!":

```javascript
bot.command({
    name: 'createFile',
    code: `
  $createFile[This is an example!;example.txt]
  `
});
```
