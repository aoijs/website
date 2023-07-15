---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID will return the ID of the guild''s system channel.'
id: guildSystemChannelID
---

`$guildSystemChannelID` will return the ID of the guild's system channel.

## Usage

```php
$guildSystemChannelID[guildID?]
```

## Parameters

| Field    | Type    | Description   | Required |
| -------- | ------- | ------------- |:--------:|
| guildID? | integer | The guild ID. |  false   |

## Example(s)

This will return the guild's system channel ID:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
