---
title: '$guildContentFilter'
description: '$guildContentFilter will return the guild''s content filter level.'
id: guildContentFilter
---

`$guildContentFilter` will return the guild's content filter level.

## الاستخدام

```php
$guildContentFilter[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | true  |

| النوع |          |
| ----- | -------- |
| 0     | Disabled |
| 1     | Medium   |
| 2     | High     |

## مثال

This will return the content filter level of a specific guild:

```javascript
bot.command({
    name: 'guildContentFilter',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
