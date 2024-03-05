---
title: $addThreadMember
description: $addThreadMember will add a member to a thread.
id: addThreadMember
---

`$addThreadMember` will add a member to a thread.

## Usage

```php
$addThreadMember[channelID;threadID;userID;reason]
```

## Parameters

| Field     | Type                                                                                              | Description                                                  | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of where the thread is located.                   |   true   |
| threadID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The thread ID.                                               |   true   |
| userID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user that should be added to the thread.                 |   true   |
| reason    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild's audit logs. |   true   |

## Example(s)

This will create a thread and add random user to it:

```javascript
client.command({
  name: "addThreadMember",
  code: `
  $addThreadMember[$channelID;$get[id];$randomUserID;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
