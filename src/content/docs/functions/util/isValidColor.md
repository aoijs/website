---
title: $isValidColor
description: $isValidColor will check if a given color is valid, based on regex.
id: isValidColor
---

`$isValidColor` will check if a given color is valid, based on regex.

## Usage

```php
$isValidColor[color]
```

## Parameters

| Field | Type                                                                                              | Description                                         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- | :------: |
| color | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The color you want to check, can be hex or decimal. |   true   |

## Example(s)

This will check if the given color `ff0000` is valid:

```js
client.command({
    name: "isValidColor",
    code: `
  $isValidColor[ff0000]` // returns: true
});
```
