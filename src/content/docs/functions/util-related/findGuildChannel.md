---
title: $findGuildChannel
description: $findGuildChannel will search a guild channel within a guild.
id: findGuildChannel
---

`$findGuildChannel` will search a guild channel within a guild.

## Usage

```php
$findGuildChannel[channelResolver;returnSelf?;guildID?]
```

## Parameters

| Field           | Type    | Description                                                              | Required |
| --------------- | ------- | ------------------------------------------------------------------------ | :------: |
| channelResolver | string  | Name of the channel you are trying to find.                              |   true   |
| returnSelf?     | boolean | Return the channel where the command got executed in when nothing found. |  false   |
| guildID?        | integer | ID of the guild where the channel is present in.                         |  false   |

## Example(s)

This will return the channel ID of an channel called `#rules`

```javascript
client.command({
  name: "findGuildChannel",
  code: `
  $findGuildChannel[rules;false;$guildID]
  `
});
```
