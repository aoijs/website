---
title: $pow
description: $pow raises the first number to the power of each subsequent number.
id: pow
---

`$pow` will raises the first number to the power of each subsequent number.

## Usage

```aoi
$pow[number;...numbers]
```

## Parameters

| Field   | Type                                                                                              | Description                                           | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| number  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The first number.                                     |   true   |
| numbers | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The numbers where the first number will be raised on. |   true   |

## Example(s)

This will return `16` since 2² is 4 and 4² is 16:

```js
client.command({
    name: "pow",
    code: `$pow[2;2;2]`
});
```
