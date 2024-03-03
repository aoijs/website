---
title: $floor
description: $floor will round a number down to the nearest integer.
id: floor
---

`$floor` will round a number down to the nearest integer.

## Usage

```php
$floor[number]
```

## Parameters

| Field  | Type                                                                                              | Description                                            | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The number of which you want the interger returned of. |   true   |

## Example(s)

This will calculate the nearest integer of `5.8`:

```js
client.command({
  name: "floor",
  code: `
  $floor[5.8]` // returns: 5
});
```
