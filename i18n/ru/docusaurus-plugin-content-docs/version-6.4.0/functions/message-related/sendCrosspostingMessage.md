---
title: '$sendCrosspostingMessage'
description: '$sendCrosspostingMessage перекроет заданное сообщение для заданных каналов.'
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` перекроет заданное сообщение в заданные каналы.

## Использование

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## Параметры

| Название      | Nbg    | Описание                        | Нужно |
| ------------- | ------ | ------------------------------- |:-----:|
| контент       | строка | Сообщение для отправки.         |  да   |
| ...ID каналов | целое  | Где отправить данное сообщение. |  да   |

## Пример(ы)

Это перекроет сообщение по нескольким каналам на вашем сервере:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```
