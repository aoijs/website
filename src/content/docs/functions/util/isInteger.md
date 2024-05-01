---
title: $isInteger
description: $isInteger will check if the given number is an integer or not.
id: isInteger
---

`$isInteger` will check if the given number is an integer or not.

## Usage

```php
$isInteger[number]
```

## Parameters

| Field  | Type                                                                                              | Description                                       | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number you want to check if its an number or not. |   true   |

## Example(s)

This checks if your message contains an integer and returns `true` or `false`:

```javascript
client.command({
    name: "isInteger",
    code: `
  $isInteger[$message]
  `
});
```
