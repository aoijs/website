---
title: $sendDm
description: $sendDm will Direct Message a given user.
id: sendDm
---

`$sendDm` will Direct Message a given user.

## Usage

```php
$sendDm[message;userID?;returnID?]
```

## Parameters

| Field     | Type    | Description                                                         | Required |
| --------- | ------- | ------------------------------------------------------------------- | :------: |
| message   | string  | The content of the Direct Message.                                  |   true   |
| userID?   | string  | The user that will receive the DM.                                  |  false   |
| returnID? | boolean | Return message ID? <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will send a DM to the command author:

```javascript
client.command({
  name: "sendDm",
  code: `
   $sendDm[Hello!;$authorID;false]  
  `,
});
```
