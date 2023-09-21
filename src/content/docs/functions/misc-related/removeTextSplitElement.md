---
title: $removeTextSplitElement
description: $removeTextSplitElement will remove a specific text split element.
id: removeTextSplitElement
---

`$removeTextSplitElement` will remove a specific text split element.

## Usage

```php
$removeTextSplitElement[element]
```

## Parameters

| Field   | Type   | Description                   | Required |
| ------- | ------ | ----------------------------- | :------: |
| element | string | Text split element to remove. |   true   |

## Example(s)

This will remove the word "bye" from the array:

```javascript
client.command({
  name: "removeTextSplitElement",
  code: `
    $removeTextSplitElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `,
});
```
