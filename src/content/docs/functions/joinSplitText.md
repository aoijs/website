---
title: $joinSplitText
description: $joinSplitText will join all text split elements by a given separator.
id: joinSplitText
---

`$joinSplitText` will join all text split elements by a given separator.

## Usage

```aoi
$joinSplitText[sep?]
```

## Parameters

| Field | Type                                                                                              | Description                                     | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| sep?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Separator to separate multiple returned values. |  false   |

## Example(s)

This will join all text split elements with a comma:

```javascript
client.command({
    name: "joinSplitText",
    code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `
});
```
