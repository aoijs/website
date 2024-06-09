---
title: $get
description: $get is used for retrieving temporary variables.
id: get
---

`$get` will retrieve temporary variables stored by `$let`.

## Usage

```aoi
$get[var]
```

## Parameters

| Field | Type                                                                                              | Description                              | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| var   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Temporary variable you want to retrieve. |   true   |

## Example(s)

This will return `Leref` from `$let`:

```javascript
client.command({
    name: "get",
    code: `
Aoi.js developer: $get[developer]
$let[developer;Leref]
`
});
```
