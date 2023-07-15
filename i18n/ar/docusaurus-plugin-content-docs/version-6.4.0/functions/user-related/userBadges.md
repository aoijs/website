---
title: '$userBadges'
description: '$userBadges will return the given users'' badges.'
id: userBadges
---

`$userBadges` will return the given users's badges.

## الاستخدام

```php
$userBadges[userId?;sep?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                                 | مطلوب |
| ------- | ------- | ---------------------------------------------------------------------------- |:-----:|
| userId? | Integer | The ID of the user you want the badges of.                                   | false |
| sep?    | string  | Separator to split multiple badges from eachother <br /> `,` (default) | false |

## مثال

This will return your Discord Badges separated with a comma:

```javascript
bot.command({
    name: 'userBadges',
    code: `
  $userBadges[$authorID;, ]
  `
});
```