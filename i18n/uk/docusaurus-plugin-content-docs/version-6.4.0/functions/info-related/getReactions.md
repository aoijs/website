---
title: '$getReactions'
description: '$getReactions will return properties about a given reaction on a specific message.'
id: getReactions
---

`$getReactions` will return properties about a given reaction on a specific message.

## Використання

```php
$getReactions[channelID;messageID;reaction;force?;option?]
```

## Параметри

| Поле      | Тип     | Опис                                                                                                                                                                                                                    | Обов'язковий |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer | ID of the channel where the message is located in.                                                                                                                                                                      |     так      |
| messageID | integer | ID of the message.                                                                                                                                                                                                      |     так      |
| reaction  | рядок   | The reaction its information will be returned of.                                                                                                                                                                       |     так      |
| force?    | boolean | 1. **true** (default) <br /> 2. **false**                                                                                                                                                                         |      ні      |
| option?   | рядок   | How it will return the users who reacted to that message <br /> 1. **username** (default) - returns the usernames   <br /> 2. **mention** - mentions the users <br /> 3. **id** - returns the user id |      ні      |

**Please note that this won't work without the `GuildMessageReactions` intent.**

## Приклад(и)

This will mention all users that reacted to your message, in this case, only your bot:

```javascript
bot.command({
    name: 'getReactions',
    code: `
$getReactions[$channelID;$messageID;👋;true;mention]
$addCmdReactions[👋]
  `
});
```