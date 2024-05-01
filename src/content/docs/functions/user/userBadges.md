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

| Field   | Type                                                                                              | Description                                                            | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | :------: |
| userId? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user you want the badges of.                             |  false   |
| sep?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to split multiple badges from each other <br /> `` (default) |  false   |

## Example(s)

This will return your Discord Badges separated with a comma:

```javascript
client.command({
  name: "userBadges",
  code: `
  $userBadges[$authorID;, ]
  `
});
```
