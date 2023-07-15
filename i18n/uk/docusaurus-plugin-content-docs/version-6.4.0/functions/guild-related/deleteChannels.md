---
title: '$deleteChannels'
description: '$deleteChannels will delete multiple channels.'
id: deleteChannels
---

`$deleteChannels` will delete multiple channels.

## Використання

```php
$deleteChannels[...channels]
```

## Параметри

| Поле        | Тип     | Опис                                                   | Обов'язковий |
| ----------- | ------- | ------------------------------------------------------ |:------------:|
| ...channels | integer | The channel Ids of the channels which will be deleted. |     так      |

## Приклад(и)

This will delete multiple channels, make sure to replace the arguments:

```javascript
bot.command({
    name: 'deleteChannels',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
