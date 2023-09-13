---
title: $joinSplitText
description: $joinSplitText will join all text split elements by a given separator.
id: joinSplitText
---

`$joinSplitText` will join all text split elements by a given separator.

## Usage

```php
$joinSplitText[sep?]
```

## Parameters

| Field | Type    | Description                                     | Required |
| ----- | ------- | ----------------------------------------------- | :------: |
| sep?  | integer | Separator to separate multiple returned values. |  false   |

## Example(s)

This will join all text split elements with a comma:

```javascript
bot.command({
  name: "joinSplitText",
  code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `,
});
```
