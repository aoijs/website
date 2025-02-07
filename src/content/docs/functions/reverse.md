---
title: $reverse
description: $reverse will reverse given text.
id: reverse
---

`$reverse` will reverse given text.

## Usage

```aoi
$reverse[text]
```

## Parameters

| Field | Type                                                                                              | Description               | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text you want to reverse. |   true   |

## Example(s)

This will return the following text `This text is reversed, if you're able to read this, then congratulations!`:

```javascript
client.command({
    name: "reverse",
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```
