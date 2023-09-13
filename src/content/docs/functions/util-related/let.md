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

| Field   | Type   | Description                                       | Required |
| ------- | ------ | ------------------------------------------------- | :------: |
| varname | string | Name of the temporary variable.                   |   true   |
| value   | string | Value of the temporary variable you want to save. |   true   |

## Example(s)

This will return `Ayaka` from `$get`:

```javascript
bot.command({
  name: "let",
  code: `
$get[genius]
$let[genius;Ayaka]
`,
});
```
