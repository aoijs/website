---
title: '$sendMessage'
description: '$sendMessage will send a message in the execution channel.'
id: sendMessage
---

`$sendMessage` will send a message in the execution channel.

## Використання

```php
$sendMessage[content;returnID?]
```

## Параметри

| Поле      | Тип     | Опис                                                                             | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| content   | рядок   | Message Content to send.                                                         |     так      |
| returnID? | boolean | Return message ID?  <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will send a message in the current channel:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello!;false]  
  `
});
```

This will send an embed in the current channel using parsers:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello! {newEmbed:{title:Bonjour!}};false]  
  `
});
```