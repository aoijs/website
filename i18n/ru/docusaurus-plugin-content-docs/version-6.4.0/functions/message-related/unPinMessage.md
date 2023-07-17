---
title: $unPinMessage
description: '$unPinMessage открепит данное сообщение.'
id: unPinMessage
---

`$unPinMessage` открепит данное сообщение.

## Использование

```php
$unPinMessage[messageID?;channelID?]
```

## Параметры

| Название     | Nbg   | Описание                                  | Нужно |
| ------------ | ----- | ----------------------------------------- |:-----:|
| ID сообщения | целое | ID сообщения для открепления.             | false |
| ID канала    | целое | ID канала, в котором находится сообщение. | false |

## Пример(ы)

Закрепить сообщение бота и открепить его через два секунды:

```javascript
bot.command({
    имя: 'unPinMessage',
    код: `
  $unPinMessage[$get[id]]
  $wait[2s]
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // используя $let & $get для сохранения ID сообщения
});
```