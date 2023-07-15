---
title: '$discriminator'
description: '$discriminator will return a user''s discriminator.'
id: discriminator
---

`$discriminator` will return a user's discriminator.

## الاستخدام

```php
$discriminator[userId?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                     | مطلوب |
| ------- | ------- | ---------------------------------------------------------------- | ----- |
| userId? | Integer | The ID of the user you want the discriminator to be returned of. | false |

## مثال

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