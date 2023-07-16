---
title: $deleteChannels
description: '$deleteChannels удалит несколько каналов.'
id: deleteChannels
---

`$deleteChannels` удалит несколько каналов.

## Использование

```php
$deleteChannels[...channels]
```

## Параметры

| Название  | Nbg   | Описание                                      | Нужно |
| --------- | ----- | --------------------------------------------- |:-----:|
| ...каналы | целое | Идентификаторы каналов которые будут удалены. |  да   |

## Пример(ы)

Это удалит несколько каналов, убедитесь что замените аргументы:

```javascript
bot.command({
    name: 'deleteChannels',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
