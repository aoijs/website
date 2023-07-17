---
title: $isVariableExist
description: '$isVariableExist проверяет, существует ли данная переменная в данной таблице.'
id: isVariableExist
---

`$isVariableExist` проверяет, существует ли заданная переменная в данной таблице.

## Использование

```php
$isVariableExist[variable;table?]
```

## Параметры

| Название   | Nbg    | Описание          | Нужно |
| ---------- | ------ | ----------------- |:-----:|
| Переменная | строка | Имя переменной.   |  да   |
| таблица?   | строка | Название таблицы. | false |

## Пример(ы)

Это будет true или false в зависимости от того, есть ли переменная `Пример`:

```javascript
bot.command({
    name: 'isVariableExist',
    code: `
  $isVariableExist[Example;main]
  `
});
```
