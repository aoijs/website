---
title: $useChannel
description: '$useChannel будет использовать указанный канал и выполнять все функции внутри него.'
id: useChannel
---

`$useChannel` будет использовать указанный канал и выполнять все функции внутри него.

## Использование

```php
$useChannel[channelID]
```

## Параметры

| Название  | Nbg   | Описание               | Нужно |
| --------- | ----- | ---------------------- |:-----:|
| ID канала | целое | Где выполнять функции. |  да   |

## Пример(ы)

Это отправит вставку в текущий канал:

```javascript
bot.command({
    name: "useChannel",
    code: `
    $description[Hello!]
    $useChannel[$channelID]
    `
});
```