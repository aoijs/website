---
title: '$userBadges'
description: '$userBadges will return the given users'' badges.'
id: userBadges
---

`$userBadges` will return the given users's badges.

## प्रोयोग

```php
$userBadges[userId?;sep?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                                 |    चाहिए     |
| ------- | -------- | ---------------------------------------------------------------------------- |:------------:|
| userId? | integer  | The ID of the user you want the badges of.                                   | असत्य (नहीं) |
| sep?    | स्ट्रिंग | Separator to split multiple badges from eachother <br /> `,` (default) | असत्य (नहीं) |

## ट्रू (हा)

This will return your Discord Badges separated with a comma:

```javascript
bot.command({
    name: 'userBadges',
    code: `
  $userBadges[$authorID;, ]
  `
});
```