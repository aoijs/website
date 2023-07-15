---
title: '$channelSendMessage'
description: '$channelSendMessage will send a message in a specific channel.'
id: channelSendMessage
---

`$channelSendMessage` will send a message in a specific channel.

## Використання

```php
$channelSendMessage[channelID;content;returnID?]
```

## Параметри

| Поле      | Тип     | Опис                                                                                                      | Обов'язковий |
| --------- | ------- | --------------------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer | Where the messages shall be sent to.                                                                      |     так      |
| content   | рядок   | What the content of the message should be.                                                                |     так      |
| returnID? | boolean | If the message ID should be returned or not. <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will send "Hello!" to the current channel:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;Hello!;false]
  `
});
```

### Embeds

This will send an embed with description and footer to the current channel:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Hello}{footer:Bye}};false]
  `
});
```
