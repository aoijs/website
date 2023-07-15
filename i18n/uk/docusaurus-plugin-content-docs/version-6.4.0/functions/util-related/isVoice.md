---
title: '$isVoice'
description: '$isVoice will check if the given channel is a voice channel or not.'
id: isVoice
---

`$isVoice` will check if the given channel is a voice channel or not.

## Використання

```php
$isVoice[channelID]
```

## Параметри

| Поле      | Тип     | Опис                                                              | Обов'язковий |
| --------- | ------- | ----------------------------------------------------------------- |:------------:|
| channelID | integer | ID of the channel that you want to check if it's a Voice Channel. |     так      |

## Приклад(и)

This will return either `true` or `false` depending on what you use as argument:

```javascript
bot.command({
    name: 'isVoice',
    code: `
  $isVoice[$channelID]
  `
});
```