---
title: $modulo
description: $modulo operation / the remainder when dividing.
id: modulo
---

`$modulo` operation / the remainder when dividing.

## Usage

```php
$modulo[num;num]
```

## Parameters

| Field | Type                                                                                              | Description                         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------- | :------: |
| num   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Numbers to return the remainder of. |   true   |

## Example(s)

This will return `2` as it's the remainder of `5 % 3`:

```javascript
client.command({
    name: "modulo",
    code: `
  $modulo[5;3]
  `
});
```
