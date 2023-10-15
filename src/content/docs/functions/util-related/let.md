---
title: $let
description: $let is used for storing temporary variables.
id: let
---

`$let` will store temporary variables which can be retrieved by `$get`.

## Usage

```php
$let[varname;value]
```

## Parameters

| Field   | Type                                                                                              | Description                                       | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the temporary variable.                   |   true   |
| value   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Value of the temporary variable you want to save. |   true   |

## Example(s)

This will return `Ayaka` from `$get`:

```javascript
client.command({
  name: "let",
  code: `
$get[genius]
$let[genius;Ayaka]
`,
});
```
