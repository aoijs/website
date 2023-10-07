---
title: $reverse
description: $reverse will reverse given text.
id: reverse
---

`$reverse` will reverse given text.

## Usage

```php
$reverse[text]
```

## Parameters

| Field | Type   | Description               | Required |
| ----- | ------ | ------------------------- | :------: |
| text  | string | Text you want to reverse. |   true   |

## Example(s)

This will the following text readable:

```javascript
client.command({
  name: "reverse",
  code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```
