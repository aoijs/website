---
title: '$reply'
description: '$reply will reply to a given message.'
id: reply
---

`$reply` will reply to a given message.

## Використання

```php
$reply[messageID?;mentionUser?]
```

## Параметри

| Поле         | Тип     | Опис                                                                                           | Обов'язковий |
| ------------ | ------- | ---------------------------------------------------------------------------------------------- |:------------:|
| messageID?   | integer | The ID of the message that will be replied to.                                                 |      ні      |
| mentionUser? | boolean | Mention the author in the reply? <br /> 1. **true** (default)  <br /> 2. **false** |      ні      |

## Приклад(и)

This will reply to your command message:

```javascript
bot.command({
    name: 'reply',
    code: `
   Hello!
   $reply[$messageID;true]
  `
});
```