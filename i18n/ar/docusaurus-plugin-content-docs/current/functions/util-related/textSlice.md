---
title: '$textSlice'
description: '$textSlice will slice a message depending on the given arguments.'
id: textSlice
---

`$textSlice` will slice a message depending on the given arguments.

## Usage

```php
$textSlice[text;from?;to]
```

## Parameters

| Field | Type   | Description                                | Required |
| ----- | ------ | ------------------------------------------ |:--------:|
| text  | string | Text you want to slice.                    |   true   |
| from? | number | Starting point where to slice the message. |  false   |
| to    | number | Ending point where slicing ends.           |   true   |

## Example(s)

This will return `Hello` and remove `Bye` from the given text:

```javascript
bot.command({
    name: 'textSlice',
    code: `
  $textSlice[Hello Bye;0;5]
  `
});
```