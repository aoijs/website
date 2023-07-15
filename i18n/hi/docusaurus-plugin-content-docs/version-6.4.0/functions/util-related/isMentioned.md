---
title: '$isMentioned'
description: '$isMentioned checks if the query contains a mention.'
id: isMentioned
---

`$isMentioned` checks if the query contains a mention.

## प्रोयोग

```php
$isMentioned[query]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                  | चाहिए |
| ----- | -------- | ------------------------------------------------------------- |:-----:|
| query | स्ट्रिंग | Where you want to check if a user/role/channel was mentioned. | true  |

## ट्रू (हा)

This will return `true` as you were mentioned within the message:

```javascript
bot.command({
    name: 'isMentioned',
    code: `
  $isMentioned[<@$authorID>]
  `
});
```
