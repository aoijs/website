---
title: $truncate
description: $truncate will remove all values after a decimal point.
id: truncate
---

`$truncate` will remove all values after a decimal point.

## Usage

```aoi
$truncate[number]
```

## Parameters

| Field                                                                                             | Type                                                                                              | Description         | Required |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number to truncate. |   true   |

## Example(s)

This will return `775` and remove `.9723` from the given value:

```javascript
client.command({
    name: "truncate",
    code: `
  $truncate[775.9723]
  `
});
```
