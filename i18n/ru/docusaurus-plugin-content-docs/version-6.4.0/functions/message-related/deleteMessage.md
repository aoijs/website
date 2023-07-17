---
title: $deleteMessage
description: '$deleteMessage удалит указанное сообщение.'
id: deleteMessage
---

`$deleteMessage` удалит определенное сообщение.

## Использование

```php
$deleteMessage[messageID;channelID]
```

## Параметры

| Название     | Nbg   | Описание                                   | Нужно |
| ------------ | ----- | ------------------------------------------ |:-----:|
| ID сообщения | целое | ID сообщения канала, который будет удален. |  да   |
| ID канала    | целое | ID канала, в котором находится сообщение.  | false |

## Пример(ы)

Это отправит и удалит отправленное сообщение через 15 секунд (мы используем $let и $get во временное хранение сообщения ID):

```javascript
bot.command({
    name: 'deleteMessage',
    code: `
  $deleteMessage[$get[id];$channelID]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```