---
title: '$guildAFKChannelID'
description: '$guildAFKChannelID will return a guild''s AFK voice channel.'
id: guildAFKChannelID
---

`$guildAFKChannelID` will return a guild's AFK voice channel

## الاستخدام

```php
$guildAFKChannelID[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | true  |

## مثال

This will return the AFK voice channel of your guild:

```javascript
bot.command({
    name: 'guildAFKChannelID',
    code: `
  $guildAFKChannelID
  `
});
```
