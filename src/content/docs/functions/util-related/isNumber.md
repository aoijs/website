---
title: $isNumber
description: $isNumber will check if the given argument is a number.
id: isNumber
---

`$isNumber` will check if the given argument is a number.

## Usage

```php
$isNumber[num]
```

## Parameters

| Field | Type                                                                                              | Description                                 | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- | :------: |
| num   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Argument you want to check if its a number. |   true   |

## Example(s)

This will return `true` as `255` is a valid number:

```javascript
client.command({
  name: "isNumber",
  code: `
  $isNumber[255]
  `
});
```
