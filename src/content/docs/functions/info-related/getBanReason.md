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

| Field    | Type                                                                                              | Description                                                  | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID.                                                |  false   |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID of the user you want to check the ban reason of. |  false   |

## Example(s)

This will return the ban reason of whoever you'd like:

```javascript
client.command({
  name: "getBanReason",
  code: `
  $getBanReason[$guildID;userID] 
  ` // make sure to replace "userID" with an actual user ID
});
```
