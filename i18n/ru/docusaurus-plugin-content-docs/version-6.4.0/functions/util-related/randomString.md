---
title: $randomString
description: '$randomString создаст случайную строку.'
id: randomString
---

`$randomString` создаст случайную строку.

## Использование

```php
$randomString[range;diffExec?]
```

## Параметры

| Название | Nbg     | Описание                                | Нужно |
| -------- | ------- | --------------------------------------- |:-----:|
| range    | число   | Диапазон генерируемой случайной строки. |  да   |
| дифлекс? | boolean |                                         | ложь  |

## Пример(ы)

Это вернет случайную строку из 20 символов:

```javascript
bot.command({
    name: 'randomString',
    code: `
  $randomString[20]
  `
});
```
