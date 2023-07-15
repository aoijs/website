---
title: '$channelName'
description: '$channelName will return the channel name of the given channel.'
id: channelName
---

`$channelName` will return the channel name of the given channel.

## Використання

```php
$channelName[channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                                    | Обов'язковий |
| ---------- | ------- | ------------------------------------------------------- |:------------:|
| channelID? | integer | Channel ID of the channel you want the channel name of. |      ні      |

## Приклад(и)

This will return the channel name of the channel where you executed the command in:

```javascript
bot.command({
    name: 'channelName',
    code: `
  $channelName[$channelID]
  `
});
```