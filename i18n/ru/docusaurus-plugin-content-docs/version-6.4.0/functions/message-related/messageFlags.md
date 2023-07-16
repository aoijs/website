---
title: $messageFlags
description: '$messageFlags возвращает флаги сообщения.'
id: messageFlags
---

`$messageFlags` возвращает флаги сообщения.

## Использование

```php
$messageFlags[messageID;sep?;channelID?]
```

## Параметры

| Название     | Nbg    | Описание                                  | Нужно |
| ------------ | ------ | ----------------------------------------- |:-----:|
| ID сообщения | целое  | Идентификатор сообщения.                  |  да   |
| sep?         | строка | Разделяйте возвращаемые значения.         | false |
| ID канала?   | целое  | ID канала, в котором находится сообщение. | false |

## Пример(ы)

Это сообщение будет отмечено в вашем первоначальном сообщении:

```javascript
bot.command({
    name: 'messageFlags',
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```
