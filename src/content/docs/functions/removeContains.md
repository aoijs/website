---
title: $removeContains
description: $removeContains will remove specific word(s) from a given text.
id: removeContains
---

`$removeContains` will remove specific word(s) from a given text.

## Usage

```aoi
$removeContains[content;...words]
```

## Parameters

| Field    | Type                                                                                              | Description                          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | :------: |
| content  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text where to remove the words from. |   true   |
| ...words | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Word(s) to remove from the text.        |   true   |

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
