---
title: $hasAttachment
description: $hasAttachment will return either true or false depending on if the message has an attachment.
id: hasAttachment
---

`$hasAttachment` will return either true or false depending on if the message has an attachment.

## Usage

```php
$hasAttachment[messageId?;channelId?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                      | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | :------: |
| messageId? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Which hasAttachment argument will be returned, leave it empty to return the whole hasAttachment. |  false   |
| channelId? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Which hasAttachment argument will be returned, leave it empty to return the whole hasAttachment. |  false   |

## Example(s)

This will check if your message has an attachment attached:

```javascript
client.command({
  name: "hasAttachment",
  code: `
  Your message has an attachment? 
  --> $hasAttachment[$messageId;$channelId]
  `
});
```
