---
title: '$guildAFKChannelID'
description: '$guildAFKChannelID will return a guild''s AFK voice channel.'
id: guildAFKChannelID
---

`$guildAFKChannelID` will return a guild's AFK voice channel

## प्रोयोग

```php
$guildAFKChannelID[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         | चाहिए |
| -------- | ------- | -------------------- |:-----:|
| guildID? | integer | The ID of the guild. | true  |

## ट्रू (हा)

This will return the AFK voice channel of your guild:

```javascript
bot.command({
    name: 'guildAFKChannelID',
    code: `
  $guildAFKChannelID
  `
});
```
