---
title: '$usersInChannel'
description: '$usersInChannel will return all users who are connected to the specified voice channel.'
id: usersInChannel
---

`$usersInChannel` will return all users who are connected to the specified voice channel.

## الاستخدام

```php
$usersInChannel[channelID;option?;sep?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                                                           | مطلوب |
| --------- | ------- | ------------------------------------------------------------------------------------------------------ |:-----:|
| channelID | Integer | Voice Channel ID.                                                                                      | true  |
| option?   | string  | How to return the users <br /> 1. **id** (default) <br /> 2. **user** - mentions the users | false |
| sep?      | string  | Separator to separate multiple returned values.                                                        | false |

## مثال

This will return the users connected to a voice channel:

```javascript
bot.command({
    name: 'usersInChannel',
    code: `
  $usersInChannel[$voiceID;user;, ]
  `
});
```
