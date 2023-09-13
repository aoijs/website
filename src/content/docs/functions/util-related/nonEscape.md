---
title: $nonEscape
description: $nonEscape will stop escaping special characters.
id: nonEscape
---

`$nonEscape` will stop escaping special characters.

## Usage

```php
$nonEscape[message]
```

## Parameters

| Field   | Type   | Description                        | Required |
| ------- | ------ | ---------------------------------- | -------- |
| message | string | Text you don't want to be escaped. | true     |

## Example(s)

This will stop from escaping certain characters:

```javascript
bot.command({
  name: "nonEscape",
  code: `
  $nonEscape[Hello [;)]]
  `,
});
```
