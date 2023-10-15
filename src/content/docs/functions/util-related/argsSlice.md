---
title: $argsSlice
description: $argsSlice will slice the given argument depending on the users input.
id: argsSlice
---

`$argsSlice` will slice the given argument depending on the users input.

## Usage

```php
$argsSlice[text;from?;to]
```

## Parameters

| Field | Type                                                                                              | Description                               | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text you want to slice                    |   true   |
| from? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Starting point where to slice the message |  false   |
| to    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Ending point where slicing ends           |   true   |

## Example(s)

This will return `Bye` and remove `Hello` from the given text:

```javascript
client.command({
  name: "slice",
  code: `
  $argsSlice[Hello Bye;1;5]
  `,
});
```
