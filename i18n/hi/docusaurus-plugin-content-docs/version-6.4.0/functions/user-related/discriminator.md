---
title: '$discriminator'
description: '$discriminator will return a user''s discriminator.'
id: discriminator
---

`$discriminator` will return a user's discriminator.

## प्रोयोग

```php
$discriminator[userId?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन                                                     | चाहिए        |
| ------- | ------- | ---------------------------------------------------------------- | ------------ |
| userId? | integer | The ID of the user you want the discriminator to be returned of. | असत्य (नहीं) |

## ट्रू (हा)

This will return your Discord User Discriminator, for example `User#0000` (the four digits):

```javascript
bot.command({
    name: 'discriminator',
    code: `
  $discriminator[$authorID] // your discriminator
  $discriminator[$clientID] // the bot's discriminator
  `
});
```