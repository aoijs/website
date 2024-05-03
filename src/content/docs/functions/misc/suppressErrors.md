---
title: $suppressErrors
description: $suppressErrors will suppress aoi.js function errors.
id: suppressErrors
---

`$suppressErrors` will suppress aoi.js function errors.

## Usage

```php
$suppressErrors[errorMsg?]
```

## Parameters

| Field    | Type                                                                                              | Description              | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| errorMsg | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error message to return. |  false   |

## Example(s)

This will suppress all errors of your code and return the pre-defined error message instead:

```javascript
client.command({
    name: "suppressErrors",
    code: `
    $description
    $suppressErrors[Something went wrong!]
    ` // Intentional invalid usage of $description
});
```
