---
title: $removeContains
description: $removeContains will remove specific text from a give text.
id: removeContains
---

`$removeContains` will remove specific text from a give text.

## Usage

```php
$removeContains[content;...words]
```

## Parameters

| Field    | Type                                                                                              | Description                          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | :------: |
| content  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text where to remove the words from. |   true   |
| ...words | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text to remove from the text.        |   true   |

## Example(s)

This will remove the word "aoi.js from the given text:

```javascript
client.command({
  name: "removeContains",
  code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```
