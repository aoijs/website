---
title: $removeSplitTextElement
description: $removeSplitTextElement will remove a specific split text element.
id: removeSplitTextElement
---

`$removeSplitTextElement` will remove a specific split text element.

## Usage

```php
$removeSplitTextElement[...elements]
```

## Parameters

| Field       | Type                                                                                              | Description                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | :------: |
| ...elements | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Split text elements to remove. |   true   |

## Example(s)

This will remove the word "bye" from the array:

```javascript
client.command({
  name: "removeSplitTextElement",
  code: `
    $removeSplitTextElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```
