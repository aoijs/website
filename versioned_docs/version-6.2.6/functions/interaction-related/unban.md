---
title: $unban
description: $unban will unban a given user.
id: unban
---

`$unban` will unban a given user.

## Usage

```php
$unban[guildID;userID]
```

## Parameters

| Field   | Type    | Description                                  | Required |
| ------- | ------- | -------------------------------------------- | :------: |
| guildID | integer | The guild ID of where the user is banned in. |   true   |
| userID  | integer | The ID of the user which will be unbanned.   |   true   |

## Example(s)

This will unban a given user:

```javascript
bot.command({
    name: 'unban',
    code: `
  $unban[$guildID;userID]
  `
});
```