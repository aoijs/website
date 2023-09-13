---
title: $messageAttachment
description: $messageAttachment will return a message attachment depending on the given index.
id: messageAttachment
---

`$messageAttachment` will return a message attachment depending on the given index.

## Usage

```php
$messageAttachment[index?]
```

## Parameters

| Field  | Type    | Description                                             | Required |
| ------ | ------- | ------------------------------------------------------- | :------: |
| index? | integer | The index of which message attachment will be returned. |  false   |

## Example(s)

This will return your given attachment:

```javascript
bot.command({
  name: "messageAttachment",
  code: `
  You had the following attachment in your message: $messageAttachment
  `,
});
```
