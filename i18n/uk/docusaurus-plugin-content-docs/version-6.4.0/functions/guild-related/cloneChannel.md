---
title: '$cloneChannel'
description: '$cloneChannel will clone a channel.'
id: cloneChannel
---

`$cloneChannel` will clone a channel.

## Використання

```php
$cloneChannel[channelID;name;returnID?]
```

## Параметри

| Поле      | Тип     | Опис                                                                | Обов'язковий |
| --------- | ------- | ------------------------------------------------------------------- |:------------:|
| channelID | integer | The ID of the channel which is to clone.                            |     так      |
| назва     | рядок   | The new name of the cloned channel.                                 |     так      |
| returnID? | рядок   | If the function should return the ID of the newly created channnel. |      ні      |

**It won't clone any messages of that channel.**

## Приклад(и)

This will clone the current channel and name it "new channel":

```javascript
bot.command({
    name: 'cloneChannel',
    code: `
  $cloneChannel[$channelID;new channel;false]
  `
});
```
