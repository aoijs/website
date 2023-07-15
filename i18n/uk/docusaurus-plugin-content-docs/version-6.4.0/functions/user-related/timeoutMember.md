---
title: '$timeoutMember'
description: '$timeoutMember will timeout a given member using Discord''s Timeout feature.'
id: timeoutMember
---

`$timeoutMember` will timeout a given member using Discord's Timeout feature.

## Використання

```php
$timeoutMember[guildID;memberID;timer;timeoutEndsAt?;reason?]
```

## Параметри

| Поле           | Тип            | Опис                                                                                          | Обов'язковий |
| -------------- | -------------- | --------------------------------------------------------------------------------------------- |:------------:|
| guildID        | integer        | The guild ID of where the member is located in.                                               |     так      |
| memberID       | integer        | The ID of the user that will be timeouted.                                                    |     так      |
| timer          | string, number | The duration of the timeout.                                                                  |     так      |
| timeoutEndsAt? | boolean        | Returns time when timeout ends.  <br /> 1. **true** <br /> 2. **false** (default) |      ні      |
| reason?        | рядок          | The reason that will be displayed in the guild's audit logs.                                  |      ні      |

## Приклад(и)

This will timeout a given member for five minutes:

```javascript
bot.command({
    name: 'timeoutMember',
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```