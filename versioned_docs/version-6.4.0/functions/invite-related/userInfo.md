---
title: $userInfo
description: $userInfo will return information about a user's invites. 
id: userInfo
---

`$userInfo` will return information about a user's invites. 

## Usage

```php
$userInfo[option;userID?]
```

## Parameters

| Field   | Type    | Description       | Required |
| ------- | ------- | ----------------- | :------: |
| option  | string  | Option to return. |   true   |
| userID? | integer | User ID.          |  false   |

| Option        | Type   | Returns                    |
| ------------- | ------ | -------------------------- |
| username      | string | Username.                  |
| discriminator | number | Discriminator.             |
| avatar        | string | Avatar.                    |
| inviter       | string | Inviter.                   |
| code          | string | Invite code.               |
| fake          | number | "Fake" invites.            |
| total         | number | Total invites.             |
| leave         | number | Amount of users that left. |


## Example(s)

This will return information about your invite data (requires events and intents, as well as invite setup):

```javascript
bot.command({
    name: 'userInfo',
    code: `
  $userInfo[total;$authorID]
  `
});
```
