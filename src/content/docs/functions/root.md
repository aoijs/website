---
title: $root
description: $root will return the root of a given number.
id: root
---

`$root` will return the root of a given number.

## Usage

```aoi
$root[number;root]
```

## Parameters

| Field  | Type                                                                                              | Description                                        | Required |
| ------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The number of which you want the root of. |   true   |
| root   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The root.                                          |   true   |

## Example(s)

This will calculate the root of 7:

```js
client.command({
    name: "root",
    code: `
  $root[7;2]` // returns: 2.6457513110645907
});
```
