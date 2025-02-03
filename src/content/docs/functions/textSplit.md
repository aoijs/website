---
title: $textSplit
description: $textSplit will split a message into parts based on a specify separator, allowing you to access each part individually by it's position.
id: textSplit
---

`$textSplit` will split a message into parts based on a specify separator, allowing you to access each part individually by it's position.

## Usage

```aoi
$textSplit[text;sep?]
```

## Parameters

| Field | Type                                                                                              | Description                       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | --------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Query of arguments.               |   true   |
| sep?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator for the text arguments. |  false   |

## Example(s)

This will return `hello, how are you`:

```javascript
client.command({
    name: "textSplit",
    code: `
  $splitText[1] $splitText[3] $splitText[6] $splitText[7]
  $textSplit[hello,__blurr__how__ayaka__leref__are__you;__]
  `
});
```
