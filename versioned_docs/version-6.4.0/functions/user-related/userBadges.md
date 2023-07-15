---
title: $userBadges
description: $userBadges will return the given users' badges.
id: userBadges
---

`$userBadges` will return the given users's badges.

## Usage

```php
$userBadges[userId?;sep?]
```

## Parameters

| Field   | Type    | Description                                                            | Required |
| ------- | ------- | ---------------------------------------------------------------------- | :------: |
| userId? | integer | The ID of the user you want the badges of.                             |  false   |
| sep?    | string  | Separator to split multiple badges from eachother <br /> `,` (default) |  false   |

## Example(s)

This will return your Discord Badges separated with a comma:

```javascript
bot.command({
    name: 'userBadges',
    code: `
  $userBadges[$authorID;, ]
  `
});
```