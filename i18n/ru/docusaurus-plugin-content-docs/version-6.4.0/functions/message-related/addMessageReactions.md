---
title: $addMessageReactions
description: '$addMessageReactions добавит реакцию к определенному сообщению.'
id: addMessageReactions
---

`$addMessageReactions` добавит реакцию к определенному сообщению.

## Использование

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## Параметры

| Название     | Nbg    | Описание                            | Нужно |
| ------------ | ------ | ----------------------------------- |:-----:|
| ID канала    | целое  | ID канала, где находится сообщение. |  да   |
| ID сообщения | целое  | ID сообщения.                       |  да   |
| реакции      | строка | Комментарии к добавлению.           |  да   |

## Пример(ы)

Это добавит реакции на ваше сообщение:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
