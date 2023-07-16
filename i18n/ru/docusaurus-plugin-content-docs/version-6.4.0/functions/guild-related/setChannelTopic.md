---
title: $setChannelTopic
description: '$setChannelTopic будет изменять тему канала.'
id: setChannelTopic
---

`$setChannelTopic` будет изменять тему канала.

## Использование

```php
$setChannelTopic[channelID;topic]
```

## Параметры

| Название  | Nbg    | Описание                                 | Нужно |
| --------- | ------ | ---------------------------------------- |:-----:|
| ID канала | целое  | ID канала, тема которого будет изменена. |  да   |
| тема      | строка | Содержимое новой темы канала.            |  да   |

## Пример(ы)

Это изменит тему канала, в которой выполняется команда:

```javascript
bot.command({
    name: 'setChannelTopic',
    code: `
   $setChannelTopic[$channelID;Hello! Это новая тема канала!]`
});
```