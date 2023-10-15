---
title: $guildRulesChannelID
description: $guildRulesChannelID will return a guild's set rules channel ID.
id: guildRulesChannelID
---

`$guildRulesChannelID` will return a guild's set rules channel ID.

## Usage

```php
$guildRulesChannelID[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the ID of the guild's rules channel (community guilds only):

```javascript
client.command({
  name: "guildRulesChannelID",
  code: `
  $guildRulesChannelID[$guildID]
  `,
});
```
