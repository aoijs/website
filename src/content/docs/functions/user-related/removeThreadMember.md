---
title: $removeThreadMember
description: $removeThreadMember will remove a given thread member from a given thread.
id: removeThreadMember
---

`$removeThreadMember` will remove a given thread member from a given thread.

## Usage

```php
$removeThreadMember[channelID;threadID;userID;reason?]
```

## Parameters

| Field     | Type    | Description                                                    | Required |
| --------- | ------- | -------------------------------------------------------------- | :------: |
| channelID | integer | The ID of the channel of where the thread is located in.       |   true   |
| threadID  | integer | The thread ID.                                                 |   true   |
| userID    | integer | The ID of the user that will be removed from the given thread. |   true   |
| reason?   | string  | Reason that will be displayed in the guild's audit logs.       |  false   |

## Example(s)

This will remove the command author from a given thread:

```javascript
client.command({
  name: "removeThreadMember",
  code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  `
});
```
