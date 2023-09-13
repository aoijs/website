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

| Field | Type    | Description                                       | Required |
| ----- | ------- | ------------------------------------------------- | :------: |
| text  | string  | Text to split.                                    |   true   |
| sep   | string  | Separator which is used to split the values.      |   true   |
| index | integer | The position of the text you want to be returned. |   true   |

## Example(s)

This will split `Hello` from `Bye` and return `Hello`:

```javascript
bot.command({
  name: "advancedTextSplit",
  code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `,
});
```
