---
title: $textSlice
description: $textSlice will slice a message depending on the given arguments.
id: textSlice
---

`$textSlice` will slice a message depending on the given arguments.

## Usage

```php
$textSlice[text;from?;to]
```

## Parameters

| Field | Type                                                                                              | Description                                | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text you want to slice.                    |   true   |
| from? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Starting point where to slice the message. |  false   |
| to    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Ending point where slicing ends.           |   true   |

## Example(s)

This will return `Hello` and remove `Bye` from the given text:

```javascript
client.command({
  name: "textSlice",
  code: `
  $textSlice[Hello Bye;0;5]
  `
});
```
