---
title: '$userBadges'
description: '$userBadges will return the given users'' badges.'
id: userBadges
---

`$userBadges` will return the given users's badges.

## Використання

```php
$userBadges[userId?;sep?]
```

## Параметри

| Поле    | Тип     | Опис                                                                         | Обов'язковий |
| ------- | ------- | ---------------------------------------------------------------------------- |:------------:|
| userId? | integer | The ID of the user you want the badges of.                                   |      ні      |
| sep?    | рядок   | Separator to split multiple badges from eachother <br /> `,` (default) |      ні      |

## Приклад(и)

This will return your Discord Badges separated with a comma:

```javascript
bot.command({
    name: 'userBadges',
    code: `
  $userBadges[$authorID;, ]
  `
});
```