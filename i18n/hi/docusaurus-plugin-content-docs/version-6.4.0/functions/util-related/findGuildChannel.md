---
title: '$findGuildChannel'
description: '$findGuildChannel will search a guild channel within a guild.'
id: findGuildChannel
---

`$findGuildChannel` will search a guild channel within a guild.

## प्रोयोग

```php
$findGuildChannel[channelResolver;returnSelf?;guildID?]
```

## पैरामीटर्स

| फील्ड           | टाइप     | डिस्क्रिप्शन                                                             |    चाहिए     |
| --------------- | -------- | ------------------------------------------------------------------------ |:------------:|
| channelResolver | स्ट्रिंग | Name of the channel you are trying to find.                              |     true     |
| returnSelf?     | boolean  | Return the channel where the command got executed in when nothing found. | असत्य (नहीं) |
| guildID?        | integer  | ID of the guild where the channel is present in.                         | असत्य (नहीं) |

## ट्रू (हा)

This will return the channel ID of an channel called `#rules`

```javascript
bot.command({
    name: 'findGuildChannel',
    code: `
  $findGuildChannel[rules;false;$guildID]
  `
});
```
