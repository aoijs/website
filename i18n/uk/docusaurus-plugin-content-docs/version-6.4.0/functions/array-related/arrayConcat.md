---
title: '$arrayConcat'
description: '$arrayConcat об''єднає декілька масивів.'
id: arrayConcat
---

`$arrayConcat` об'єднає декілька масивів.

## Використання

```php
$arrayConcat[роздільник;...масиви]
```

## Параметри

| Поле       | Тип   | Опис          | Необхідно |
| ---------- | ----- | ------------- |:---------:|
| роздільник | рядок | Роздільник.   |    так    |
| ...масиви  | рядок | Назва масиву. |    так    |

## Приклад(и)

Це поверне `Це є тест`, оскільки об'єднує масиви 1 і 2:

```javascript
bot.command({
    name: 'arrayConcat',
    code: `
  $arrayConcat[ ;array1;array2]
  $createArray[array1;Це є]
  $createArray[array2;тест]
  `
});
```