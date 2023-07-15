---
title: '$deleteChannel'
description: '$deleteChannel will delete a specific channel.'
id: deleteChannel
---

`$deleteChannel` will delete a specific channel.

## Використання

```php
$deleteChannel[channelID]
```

## Параметри

| Поле      | Тип     | Опис                                                 | Обов'язковий |
| --------- | ------- | ---------------------------------------------------- |:------------:|
| channelID | integer | The channel ID of the channel which will be deleted. |     так      |

## Приклад(и)

This will delete the channel where the command was executed in:

```javascript
bot.command({
    name: 'deleteChannel',
    code: `
  $deleteChannel[$channelID]
  `
});
```
