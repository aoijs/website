---
title: $editTextSplitElement
description: $editTextSplitElement will edit a specific text split element.
id: editTextSplitElement
---

`$editTextSplitElement` will edit a specific text split element.

## Usage

```php
$editTextSplitElement[index;text]
```

## Parameters

| Field | Type                                                                                              | Description                      | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------------------------- | :------: |
| index | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Index of the text split element. |   true   |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New text split element.          |   true   |

## Example(s)

This will edit the 3rd text split element and change it to "Goodbye":

```javascript
client.command({
  name: "editTextSplitElement",
  code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```
