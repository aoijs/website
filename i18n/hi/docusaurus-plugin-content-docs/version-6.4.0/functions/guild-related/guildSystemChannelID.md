---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID will return the ID of the guild''s system channel.'
id: guildSystemChannelID
---

`$guildSystemChannelID` will return the ID of the guild's system channel.

## प्रोयोग

```php
$guildSystemChannelID[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the guild's system channel ID:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
