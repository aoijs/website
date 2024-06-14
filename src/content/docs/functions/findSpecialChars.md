---
title: $findSpecialChars
description: $findSpecialChars will return all special characters of the given argument.
id: findSpecialChars
---

`$findSpecialChars` will return all special characters of the given argument.

## Usage

```aoi
$findSpecialChars[text]
```

## Parameters

| Field | Type                                                                                              | Description                                     | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text where you want to find special characters. |   true   |

## Example(s)

This will return `######`:

```javascript
client.command({
    name: "findSpecialChars",
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
