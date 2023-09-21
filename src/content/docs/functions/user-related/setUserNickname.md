---
title: $setUserNickname
description: $setUserNickname will change a nickname of a guild member.
id: setUserNickname
---

`$setUserNickname` will change a nickname of a guild member.

## Usage

```php
$setUserNickname[userID;newName;reason?]
```

## Parameters

| Field   | Type           | Description                                              | Required |
| ------- | -------------- | -------------------------------------------------------- | :------: |
| userID  | integer        | The user ID of the user whose nickname shall be changed. |   true   |
| newName | string, number | Their new nickname.                                      |   true   |
| reason? | string, number | Reason that will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will change your nickname to "I love aoi.js": (wont work if you're the guild owner)

```javascript
client.command({
  name: "setUserNickname",
  code: `
  $setUserNickname[$authorID;I love aoi.js;They simply love aoi.js]
  `,
});
```
