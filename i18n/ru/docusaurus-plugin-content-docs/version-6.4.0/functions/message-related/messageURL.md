---
title: $messageURL
description: '$messageURL вернёт URL заданного сообщения.'
id: messageURL
---

`$messageURL` возвращает URL данного сообщения.

## Использование

```php
$messageURL[messageID?;channelID?]
```

## Параметры

| Название      | Nbg   | Описание                                     | Нужно |
| ------------- | ----- | -------------------------------------------- |:-----:|
| ID сообщения? | целое | ID сообщения.                                | false |
| ID канала?    | целое | ID сообщения, в котором находится сообщение. | false |

## Пример(ы)

Это вернёт URL сообщения сообщения, который выполнил команду:

```javascript
bot.command({
    name: 'messageURL',
    code: `
  $messageURL[$messageID;$channelID]
  `
});
```
