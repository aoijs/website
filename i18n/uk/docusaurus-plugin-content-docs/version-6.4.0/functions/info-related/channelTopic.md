---
title: '$channelTopic'
description: '$channelTopic will return the given channel''s topic.'
id: channelTopic
---

`$channelTopic` will return the given channel's topic.

## Використання

```php
$channelTopic[channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                                          | Обов'язковий |
| ---------- | ------- | ------------------------------------------------------------- |:------------:|
| channelID? | integer | ID of the channel you want it to return the channel topic of. |      ні      |

## Приклад(и)

This will return the channel topic of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelTopic',
    code: `
  $channelTopic[$channelID]
  `
});
```