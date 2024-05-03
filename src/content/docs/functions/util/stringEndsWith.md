---
title: $stringEndsWith
description: $stringEndsWith will check if the given argument ends with something specific.
id: stringEndsWith
---

`$stringEndsWith` will check if the given argument ends with something specific.

## Usage

```php
$stringEndsWith[text;check]
```

## Parameters

| Field | Type                                                                                              | Description                                                            | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will be checked.                                         |   true   |
| check | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The argument that will check if the text ends with something specific. |   true   |

## Example(s)

This will return `true` as `aoi.js` ends with `js`:

```javascript
client.command({
    name: "stringEndsWith",
    code: `
  $stringEndsWith[aoi.js;js]
  `
});
```
