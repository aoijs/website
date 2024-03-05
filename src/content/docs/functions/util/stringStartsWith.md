---
title: $stringStartsWith
description: $stringStartsWith will check if the given argument starts with something specific.
id: stringStartsWith
---

`$stringStartsWith` will check if the given argument starts with something specific.

## Usage

```php
$stringStartsWith[text;check]
```

## Parameters

| Field | Type                                                                                              | Description                                                              | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will be checked.                                           |   true   |
| check | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The argument that will check if the text starts with something specific. |   true   |

## Example(s)

This will return `true` as `aoi.js` starts with `aoi`:

```javascript
client.command({
  name: "stringStartsWith",
  code: `
  $stringStartsWith[aoi.js;aoi]
  `
});
```
