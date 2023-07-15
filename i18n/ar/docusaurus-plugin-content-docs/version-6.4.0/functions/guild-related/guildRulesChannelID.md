---
title: '$guildRulesChannelID'
description: '$guildRulesChannelID will return a guild''s set rules channel ID.'
id: guildRulesChannelID
---

`$guildRulesChannelID` will return a guild's set rules channel ID.

## الاستخدام

```php
$guildRulesChannelID[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the ID of the guild's rules channel (community guilds only):

```javascript
bot.command({
    name: 'guildRulesChannelID',
    code: `
  $guildRulesChannelID[$guildID]
  `
});
```
