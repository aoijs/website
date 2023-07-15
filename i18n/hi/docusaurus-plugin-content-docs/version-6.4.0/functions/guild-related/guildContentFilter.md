---
title: '$guildContentFilter'
description: '$guildContentFilter will return the guild''s content filter level.'
id: guildContentFilter
---

`$guildContentFilter` will return the guild's content filter level.

## प्रोयोग

```php
$guildContentFilter[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         | चाहिए |
| -------- | ------- | -------------------- |:-----:|
| guildID? | integer | The ID of the guild. | true  |

| टाइप |          |
| ---- | -------- |
| 0    | Disabled |
| 1    | Medium   |
| 2    | High     |

## ट्रू (हा)

This will return the content filter level of a specific guild:

```javascript
bot.command({
    name: 'guildContentFilter',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
