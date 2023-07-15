---
title: '$muteUser'
description: '$muteUser will mute or unmute a given user in a Voice Channel.'
id: muteUser
---

`$muteUser` will mute or unmute a given user in a Voice Channel.

## Використання

```php
$muteUser[guildID;userID;mute?;reason?]
```

## Параметри

| Поле    | Тип     | Опис                                                                                                  | Обов'язковий |
| ------- | ------- | ----------------------------------------------------------------------------------------------------- |:------------:|
| guildID | integer | The guild ID of where the user is located.                                                            |     так      |
| userID  | integer | The user ID of the user to mute/unmute.                                                               |     так      |
| mute?   | boolean | Mute or unmute the user. <br /> 1. **true** (mute / default) <br /> 2. **false** (unmute) |      ні      |
| reason? | рядок   | Reason that will be displayed in the guild's audit logs.                                              |      ні      |

## Приклад(и)

This will server mute yourself (must be in a voice channel):

```javascript
bot.command({
    name: 'muteUser',
    code: `
  $muteUser[$guildID;$authorID;true]
  `
});
```