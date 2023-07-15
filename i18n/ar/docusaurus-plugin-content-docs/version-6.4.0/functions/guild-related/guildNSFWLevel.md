---
title: '$guildNSFWLevel'
description: '$guildNSFWLevel will return the guild''s NSFW level.'
id: guildNSFWLevel
---

`$guildNSFWLevel` will return the guild's NSFW level.

## الاستخدام

```php
$guildNSFWLevel[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | true  |

## مثال

This will return the guild's NSFW level:

```javascript
bot.command({
    name: 'guildNSFWLevel',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
