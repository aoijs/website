---
title: '$guildEmojis'
description: '$guildEmojis will return the emojis of a specific guild.'
id: guildEmojis
---

`$guildEmojis` will return the emojis of a specific guild.

## الاستخدام

```php
$guildEmojis[sep?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                   | مطلوب |
| -------- | ------- | ---------------------------------------------- |:-----:|
| sep?     | string  | The separator to separate the returned emojis. | false |
| guildID? | Integer | The ID of the guild.                           | false |

## مثال

This will return the emojis of your guild:

```javascript
bot.command({
    name: 'guildEmojis',
    code: `
  $guildEmojis[, ;$guildID]
  `
});
```
