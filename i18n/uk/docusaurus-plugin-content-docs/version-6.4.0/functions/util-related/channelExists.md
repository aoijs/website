---
title: '$channelExists'
description: '$channelExists will check if the given channel exists.'
id: channelExists
---

`$channelExists` will check if the given channel exists.

## Використання

```php
$channelExists[channel]
```

## Параметри

| Поле    | Тип             | Опис                        | Обов'язковий |
| ------- | --------------- | --------------------------- |:------------:|
| channel | string, integer | Channel ID or channel name. |     так      |

## Приклад(и)

This will check if a channel with the name `general` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'channelExists',
    code: `
  $channelExists[general]
  `
});
```
