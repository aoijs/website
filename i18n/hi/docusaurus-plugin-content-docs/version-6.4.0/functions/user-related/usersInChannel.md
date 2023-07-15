---
title: '$usersInChannel'
description: '$usersInChannel will return all users who are connected to the specified voice channel.'
id: usersInChannel
---

`$usersInChannel` will return all users who are connected to the specified voice channel.

## प्रोयोग

```php
$usersInChannel[channelID;option?;sep?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                                           |    चाहिए     |
| --------- | -------- | ------------------------------------------------------------------------------------------------------ |:------------:|
| channelID | integer  | Voice Channel ID.                                                                                      |     true     |
| option?   | स्ट्रिंग | How to return the users <br /> 1. **id** (default) <br /> 2. **user** - mentions the users | असत्य (नहीं) |
| sep?      | स्ट्रिंग | Separator to separate multiple returned values.                                                        | असत्य (नहीं) |

## ट्रू (हा)

This will return the users connected to a voice channel:

```javascript
bot.command({
    name: 'usersInChannel',
    code: `
  $usersInChannel[$voiceID;user;, ]
  `
});
```
