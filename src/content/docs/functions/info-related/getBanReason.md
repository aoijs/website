---
title: $getBanReason
description: $getBanReason will return a ban reason of an specific user.
id: getBanReason
---

`$getBanReason` will return a ban reason of an specific user.

## Usage

```php
$getBanReason[guildID?;userID?]
```

## Parameters

| Field    | Type    | Description                                                  | Required |
| -------- | ------- | ------------------------------------------------------------ | :------: |
| guildID? | integer | The guild ID.                                                |  false   |
| userID?  | integer | The user ID of the user you want to check the ban reason of. |  false   |

## Example(s)

This will return the ban reason of whoever you'd like:

```javascript
client.command({
  name: "getBanReason",
  code: `
  $getBanReason[$guildID;userID] 
  `, // make sure to replace "userID" with an actual user ID
});
```
