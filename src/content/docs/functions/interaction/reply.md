---
title: $reply
description: $reply will reply to a given message.
id: reply
---

`$reply` will reply to a given message.

## Usage

```php
$reply[messageID?;mentionUser?]
```

## Parameters

| Field        | Type                                                                                                | Description                                                                       | Required |
| ------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | :------: |
| messageID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the message that will be replied to.                                    |  false   |
| mentionUser? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Mention the author in the reply? <br /> 1. **true** (default) <br /> 2. **false** |  false   |

## Example(s)

This will reply to your command message:

```javascript
client.command({
  name: "reply",
  code: `
   Hello!
   $reply[$messageID;true]
  `
});
```
