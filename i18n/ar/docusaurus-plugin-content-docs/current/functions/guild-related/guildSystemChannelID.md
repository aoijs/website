---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID will return the ID of the guild''s system channel.'
id: guildSystemChannelID
---

`$guildSystemChannelID` will return the ID of the guild's system channel.

## الاستخدام

```php
$guildSystemChannelID[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the guild's system channel ID:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
