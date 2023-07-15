---
title: '$userDefaultAvatar'
description: '$userDefaultAvatar will return the given user''s default Discord User Avatar.'
id: userDefaultAvatar
---

`$userDefaultAvatar` will return the given user's default Discord User Avatar.

## Usage

```php
$userDefaultAvatar[userID?]
```

## Parameters

| Field   | Type    | Description         | Required |
| ------- | ------- | ------------------- |:--------:|
| userID? | integer | The ID of the user. |  false   |

## Example(s)

This will return your default Discord User Avatar:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
