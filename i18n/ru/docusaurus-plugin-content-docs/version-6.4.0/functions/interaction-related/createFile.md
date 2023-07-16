---
title: $createFile
description: '$createFile создаст вложение файла.'
id: createFile
---

`$createFile` создаст файл вложения.

## Использование

```php
$createFile[attachment;name]
```

## Параметры

| Название | Nbg    | Описание           | Нужно |
| -------- | ------ | ------------------ |:-----:|
| вложение | строка | Содержимое файла.  |  да   |
| название | строка | Название вложения. |  да   |

## Пример(ы)

Это создаст текстовый файл под названием **`example.txt`** с текстом "Это пример!":

```javascript
bot.command({
    имя: 'createFile',
    код: `
  $createFile[This is an example!;example.txt]
  `
});
```
