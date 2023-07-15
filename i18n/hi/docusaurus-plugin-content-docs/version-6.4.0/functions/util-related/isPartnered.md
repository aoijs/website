---
title: '$isPartnered'
description: '$isPartnered checks if the given guild is partnered with Discord.'
id: isPartnered
---

`$isPartnered` checks if the given guild is partnered with Discord.

## प्रोयोग

```php
$isPartnered[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                     | चाहिए |
| -------- | ------- | ---------------------------------------------------------------- |:-----:|
| guildID? | integer | The ID of the guild you want to check its partnership status of. | true  |

## ट्रू (हा)

This will check if your server is partnered and return either `true` or `false`:

```javascript
bot.command({
    name: 'isPartnered',
    code: `
  $isPartnered[$guildID]
  `
});
```
