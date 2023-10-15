---
title: $concatTextSplit
description: $concatTextSplit will concatenates the text with the given separator.
id: concatTextSplit
---

`$concatTextSplit` will concatenates the text with the given separator.

## Usage

```php
$concatTextSplit[...text]
```

## Parameters

| Field | Type                                                                                              | Description                                        | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text to concat to the existing textSplit elements. |   true   |

## Example(s)

This will add `Hello, Bye` to the already used `$textSplit` argument:

```javascript
client.command({
  name: "concatTextSplit",
  code: `
  $concatTextSplit[Hello;Bye]
  $textSplit[Goodmorning, Goodnight;, ]
  `,
});
```
