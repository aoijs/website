---
title: $numberSeparator
description: $numberSeparator will separate numbers and make them readable.
id: numberSeparator
---

`$numberSeparator` will separate numbers and make them readable.

## Usage

```php
$numberSeparator[num;sep?]
```

## Parameters

| Field | Type                                                                                              | Description                                                         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| num   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number you want to separate.                                        |   true   |
| sep?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator which will be used to separate the numbers, default: `,`. |  false   |

## Example(s)

This will return `1,000,000`:

```javascript
client.command({
  name: "numberSeparator",
  code: `
  $numberSeparator[1000000;,]
  `
});
```
