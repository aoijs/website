---
title: '$guildEmojis'
description: '$guildEmojis will return the emojis of a specific guild.'
id: guildEmojis
---

`$guildEmojis` will return the emojis of a specific guild.

## प्रोयोग

```php
$guildEmojis[sep?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                   |    चाहिए     |
| -------- | -------- | ---------------------------------------------- |:------------:|
| sep?     | स्ट्रिंग | The separator to separate the returned emojis. | असत्य (नहीं) |
| guildID? | integer  | The ID of the guild.                           | असत्य (नहीं) |

## ट्रू (हा)

This will return the emojis of your guild:

```javascript
bot.command({
    name: 'guildEmojis',
    code: `
  $guildEmojis[, ;$guildID]
  `
});
```
