---
title: $divide
description: $divide will divide two given numbers.
id: divide
---

`$divide` will divide two given numbers.

## Usage

```php
$divide[...numbers;...numbers]
```

## Parameters

| Field   | Type                                                                                              | Description                                 | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- | :------: |
| numbers | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Numbers you want to divide with each other. |   true   |

## Example(s)

This will return `23` as `69/3` equals it.

```javascript
client.command({
    name: "divide",
    code: `
  $divide[69;3]
  `
});
```
