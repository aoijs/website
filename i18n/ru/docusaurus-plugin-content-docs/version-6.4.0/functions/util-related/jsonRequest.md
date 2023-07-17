---
title: '$jsonRequest'
description: '$jsonRequest будет отправлять GET запрос на заданный URL-адрес.'
id: jsonRequest
---

`$jsonRequest` отправит GET запрос на заданный URL.

## Использование

```php
$jsonRequest[URL;property?;error?;...header?]
```

## Параметры

| Название     | Nbg    | Описание                                            | Нужно |
| ------------ | ------ | --------------------------------------------------- |:-----:|
| URL          | строка | URL, на который вы хотите получить/отправить данные |  да   |
| свойство?    | строка | Возвращаемое свойство (получить метод)              | false |
| ошибка?      | строка | Ошибка возврата при сбое запроса                    | false |
| ...заголовок | строка | Заголовок.                                          | false |

## Пример(ы)

Это вернет случайный факт:

```javascript
bot.command({
    name: "jsonRequest",
    code: `
    $jsonRequest[https://some-random-api.ml/facts/dog;fact;Something went wrong.]
    «
});
```