---
title: '$isValidObject'
description: '$isValidObject проверяет, является ли данный json допустимым объектом.'
id: isValidObject
---

`$isValidObject` проверяет, является ли данный json допустимым объектом.

## Использование

```php
$isValidObject[object]
```

## Параметры

| Название | Nbg    | Описание     | Нужно |
| -------- | ------ | ------------ |:-----:|
| объект   | объект | JSON объект. |  да   |

## Пример(ы)

Будет возвращено `истина` , так как данный объект является допустимым объектом JSON:

```javascript
bot.command({
    name: 'isValidObject',
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```
