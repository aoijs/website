---
title: $isNumber
description: $isNumber will check if the given number is an number or not.
id: isNumber
---

`$isNumber` will check if the given number is an number or not.

## Usage

```php
$isNumber[number]
```

## Parameters

| Field  | Type                                                                                              | Description                                       | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number you want to check if its an number or not. |   true   |

## Example(s)

This checks if your message contains an number and returns `true` or `false`:

```javascript
client.command({
  name: "isNumber",
  code: `
  $isNumber[$message]
  `
});
```
