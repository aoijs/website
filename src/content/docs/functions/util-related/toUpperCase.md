---
title: $toUpperCase
description: $toUpperCase will change the given text from lowercase to uppercase.
id: toUpperCase
---

`$toUpperCase` will change the given text from lowercase to uppercase.

## Usage

```php
$toUpperCase[text]
```

## Parameters

| Field | Type                                                                                              | Description                      | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text to change to uppercase. |   true   |

## Example(s)

This will everything given to uppercase, in this case it would return `THIS IS AN EXAMPLE`:

```javascript
client.command({
  name: "toUpperCase",
  code: `
    $toUpperCase[this is an example]
    `,
});
```
