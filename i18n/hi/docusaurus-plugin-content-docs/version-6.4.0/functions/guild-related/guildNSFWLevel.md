---
title: '$guildNSFWLevel'
description: '$guildNSFWLevel will return the guild''s NSFW level.'
id: guildNSFWLevel
---

`$guildNSFWLevel` will return the guild's NSFW level.

## प्रोयोग

```php
$guildNSFWLevel[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         | चाहिए |
| -------- | ------- | -------------------- |:-----:|
| guildID? | integer | The ID of the guild. | true  |

## ट्रू (हा)

This will return the guild's NSFW level:

```javascript
bot.command({
    name: 'guildNSFWLevel',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
