---
title: '$hasEmbeds'
description: '$hasEmbeds will check if there are embeds attached to the message.'
id: hasEmbeds
---

`$hasEmbeds` will check if there are embeds attached to the message.

## Використання

```php
$hasEmbeds[messageID;channelID]
```

## Параметри

| Поле      | Тип     | Опис                                                | Обов'язковий |
| --------- | ------- | --------------------------------------------------- |:------------:|
| messageID | integer | ID of the message to check if it contains an embed. |     так      |
| channelID | integer | ID of the channel where the message is located in.  |     так      |

## Приклад(и)

This will return `false` as there are no embeds attached to your message:

```javascript
bot.command({
    name: 'hasEmbeds',
    code: `
  $hasEmbeds[$messageID;$channelID]
  `
});
```
