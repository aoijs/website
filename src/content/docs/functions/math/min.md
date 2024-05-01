---
title: $min
description: $min returns the smallest number from the provided numbers.
id: min
---

`$min` returns the smallest number from the provided numbers.

## Usage

```php
$min[...numbers]
```

## Parameters

| Field   | Type                                                                                              | Description                                             | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | :------: |
| numbers | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The numbers where the smallest number will be searched. |   true   |

## Example(s)

This will return `5` since its the smallest number provided:

```js
client.command({
    name: "min",
    code: `$min[17;42;91;5;63;28;55;10;77;36]`
});
```
