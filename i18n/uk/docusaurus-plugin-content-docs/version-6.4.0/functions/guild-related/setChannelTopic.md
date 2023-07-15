---
title: '$setChannelTopic'
description: '$setChannelTopic will modify a channel''s topic.'
id: setChannelTopic
---

`$setChannelTopic` will modify a channel's topic.

## Використання

```php
$setChannelTopic[channelID;topic]
```

## Параметри

| Поле      | Тип     | Опис                                                | Обов'язковий |
| --------- | ------- | --------------------------------------------------- |:------------:|
| channelID | integer | The ID of the channel whose topic will be modified. |     так      |
| topic     | рядок   | Content of the new channel topic.                   |     так      |

## Приклад(и)

This will change the topic of the channel where the command is executed in:

```javascript
bot.command({
    name: 'setChannelTopic',
    code: `
   $setChannelTopic[$channelID;Hello! This is the new channel topic!]`
});
```