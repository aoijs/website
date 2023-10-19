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

| Field                                        | Type                                                                                                | Description                        | Required |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | :------: |
| message                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The content of the Direct Message. |   true   |
| userID?                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The user that will receive the DM. |  false   |
| returnID?                                    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| JavaScript/Reference/Global_Objects/Boolean) | Return message ID? <br /> 1. **true** <br /> 2. **false** (default)                                 | false                              |

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
