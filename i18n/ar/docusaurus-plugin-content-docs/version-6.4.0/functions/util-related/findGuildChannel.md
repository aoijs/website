---
title: '$findGuildChannel'
description: '$findGuildChannel will search a guild channel within a guild.'
id: findGuildChannel
---

`$findGuildChannel` will search a guild channel within a guild.

## الاستخدام

```php
$findGuildChannel[channelResolver;returnSelf?;guildID?]
```

## البارامترات

| Field           | النوع   | الديسكبربشين                                                             | مطلوب |
| --------------- | ------- | ------------------------------------------------------------------------ |:-----:|
| channelResolver | string  | Name of the channel you are trying to find.                              | true  |
| returnSelf?     | boolean | Return the channel where the command got executed in when nothing found. | false |
| guildID?        | Integer | ID of the guild where the channel is present in.                         | false |

## مثال

This will return the channel ID of an channel called `#rules`

```javascript
bot.command({
    name: 'findGuildChannel',
    code: `
  $findGuildChannel[rules;false;$guildID]
  `
});
```
