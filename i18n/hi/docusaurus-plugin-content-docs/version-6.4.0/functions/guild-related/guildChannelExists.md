---
title: '$guildChannelExists'
description: '$guildChannelExists will check if a given guild channel exists.'
id: guildChannelExists
---

`$guildChannelExists` will check if a given guild channel exists.

## प्रोयोग

```php
$guildChannelExists[guildID;channelResolver]
```

## पैरामीटर्स

| फील्ड           | टाइप            | डिस्क्रिप्शन                                       | चाहिए |
| --------------- | --------------- | -------------------------------------------------- |:-----:|
| guildID         | integer         | ID of the guild where the guild channel exists in. | true  |
| channelResolver | integer, string | Channel ID or name of the channel.                 | true  |

## ट्रू (हा)

This will check if a guild channel with the name `rules` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'guildChannelExists',
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
