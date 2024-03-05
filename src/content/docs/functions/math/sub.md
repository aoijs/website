---
title: $sub
description: $sub will substract two given numbers.
id: sub
---

`$sub` will substract two given numbers.

## Usage

```php
$sub[num;num]
```

## Parameters

| Field | Type                                                                                              | Description                          | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | :------: |
| num   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Numbers to perform calculation with. |   true   |

## Example(s)

This will return `65` as `70-5` equals `65`:

```javascript
client.command({
  name: "sub",
  code: `
  $sub[70;5]
  `
});
```
