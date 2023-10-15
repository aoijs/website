---
title: $advancedTextSplit
description: $advancedTextSplit will split multiple given arguments.
id: advancedTextSplit
---

`$advancedTextSplit` will split multiple given arguments.

## Usage

```php
$advancedTextSplit[text;sep;index;sep?;index?]
```

## Parameters

| Field | Type                                                                                              | Description                                       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text to split.                                    |   true   |
| sep   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator which is used to split the values.      |   true   |
| index | integer                                                                                           | The position of the text you want to be returned. |   true   |

## Example(s)

This will split `Hello` from `Bye` and return `Hello`:

```javascript
client.command({
  name: "advancedTextSplit",
  code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `,
});
```
