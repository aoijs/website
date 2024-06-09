---
title: $nonEscape
description: $nonEscape will stop escaping special characters.
id: nonEscape
---

`$nonEscape` will stop escaping special characters.

## Usage

```aoi
$nonEscape[message]
```

## Parameters

| Field   | Type                                                                                              | Description                        | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ---------------------------------- | -------- |
| message | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text you don't want to be escaped. | true     |

## Example(s)

This will stop from escaping certain characters:

```javascript
client.command({
    name: "nonEscape",
    code: `
  $nonEscape[Hello [;)]]
  `
});
```
