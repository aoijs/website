---
title: '$sendDm'
description: '$sendDm will Direct Message a given user.'
id: sendDm
---

`$sendDm` will Direct Message a given user.

## Використання

```php
$sendDm[message;userID?;returnID?]
```

## Параметри

| Поле      | Тип     | Опис                                                                             | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| message   | рядок   | The content of the Direct Message.                                               |     так      |
| userID?   | рядок   | The user that will receive the DM.                                               |      ні      |
| returnID? | boolean | Return message ID?  <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will send a DM to the command author:

```javascript
bot.command({
    name: 'sendDm',
    code: `
   $sendDm[Hello!;$authorID;false]  
  `
});
```