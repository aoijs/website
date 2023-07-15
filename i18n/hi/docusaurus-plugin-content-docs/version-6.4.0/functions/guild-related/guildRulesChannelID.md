---
title: '$guildRulesChannelID'
description: '$guildRulesChannelID will return a guild''s set rules channel ID.'
id: guildRulesChannelID
---

`$guildRulesChannelID` will return a guild's set rules channel ID.

## प्रोयोग

```php
$guildRulesChannelID[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of the guild's rules channel (community guilds only):

```javascript
bot.command({
    name: 'guildRulesChannelID',
    code: `
  $guildRulesChannelID[$guildID]
  `
});
```
