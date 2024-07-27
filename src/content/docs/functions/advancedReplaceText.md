---
title: $advancedReplaceText
description: $advancedReplaceText will replace specific segments of text in sequence.
id: advancedReplaceText
---

`$advancedReplaceText` will replace specific segments of text in sequence.

## Usage

```aoi
$advancedReplaceText[text;replacer;replaceTo;...]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                  | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | :------: |
| text      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text you want to modify.                                                     |   true   |
| replacer  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will be replaced.                                              |   true   |
| replaceTo | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text that will replace `replacer`.                                       |   true   |

## Example(s)

This will replace `Meow Cat` to `Dog Woof`:

```javascript
client.command({
    name: "replaceText",
    code: `
  $advancedReplaceText[Meow Cat;Cat;Dog;Meow;Woof]
  `
});
```