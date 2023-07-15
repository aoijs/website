---
title: '$guildExists'
description: '$guildExists will check if the given guild exists.'
id: guildExists
---

`$guildExists` will check if the given guild exists.

## प्रोयोग

```php
$guildExists[guildId]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन | चाहिए |
| ------- | ------- | ------------ |:-----:|
| guildId | integer | Guild ID.    | true  |

## ट्रू (हा)

This will return `true` your guild exists:

```javascript
bot.command({
    name: 'guildExists',
    code: `
  $guildExists[$guildID]
  `
});
```