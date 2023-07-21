---
title: $messageType
description: '$messageType вернёт тип заданного сообщения.'
id: messageType
---

`$messageType` вернёт тип данного сообщения.

## Использование

```php
$messageType[messageID?;channelID?]
```

## Параметры

| Название      | Nbg   | Описание                                  | Нужно |
| ------------- | ----- | ----------------------------------------- |:-----:|
| ID сообщения? | целое | ID сообщения.                             | ложь  |
| ID канала?    | целое | ID канала, в котором находится сообщение. | ложь  |

## Пример(ы)

Это вернёт тип сообщения, который выполнил команду:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
