---
title: '$isStreaming'
description: '$isStreaming will check if one user is streaming in a voice channel.'
id: isStreaming
---

`$isStreaming` will check if one user is streaming in a voice channel.

## Використання

```php
$isStreaming[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                   | Обов'язковий |
| -------- | ------- | ------------------------------------------------------ |:------------:|
| userID?  | integer | ID of the user you want to check if they're streaming. |      ні      |
| guildID? | integer | ID of the channel where they're streaming in.          |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if you're streaming (voice channel) or not:

```javascript
bot.command({
    name: 'isStreaming',
    code: `
  $isStreaming[$authorID;$guildID]
  `
});
```
