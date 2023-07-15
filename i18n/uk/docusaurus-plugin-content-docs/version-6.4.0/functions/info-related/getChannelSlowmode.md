---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode will return a channel''s slowmode in seconds.'
id: getChannelSlowmode
---

`$getChannelSlowmode` will return a channel's slowmode in seconds.

## Використання

```php
$getChannelSlowmode[channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                                                     | Обов'язковий |
| ---------- | ------- | ------------------------------------------------------------------------ |:------------:|
| channelID? | integer | ID of the channel where you want the channel slowmode to be returned of. |      ні      |

## Приклад(и)

This will return the slowmode of the channel where you execute the command in:

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  The current channel slowmode is: $getChannelSlowmode[$channelID] seconds!
  `
});
```