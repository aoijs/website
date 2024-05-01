---
title: $max
description: $max will returns the biggest number from the provided numbers.
id: max
---

`$max` returns the biggest number from the provided numbers.

## Usage

```php
$max[...numbers]
```

## Parameters

| Field   | Type                                                                                              | Description                                            | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| numbers | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The numbers where the biggest number will be searched. |   true   |

## Example(s)

This will return `91` since its the biggest number provided:

```js
client.command({
    name: "max",
    code: `$max[17;42;91;5;63;28;55;10;77;36]`
});
```
