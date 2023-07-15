---
title: '$guildChannelExists'
description: '$guildChannelExists will check if a given guild channel exists.'
id: guildChannelExists
---

`$guildChannelExists` will check if a given guild channel exists.

## الاستخدام

```php
$guildChannelExists[guildID;channelResolver]
```

## البارامترات

| Field           | النوع           | الديسكبربشين                                       | مطلوب |
| --------------- | --------------- | -------------------------------------------------- |:-----:|
| guildID         | Integer         | ID of the guild where the guild channel exists in. | true  |
| channelResolver | integer, string | Channel ID or name of the channel.                 | true  |

## مثال

This will check if a guild channel with the name `rules` exists, alternatively you could use the channel ID instead:

```javascript
bot.command({
    name: 'guildChannelExists',
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
