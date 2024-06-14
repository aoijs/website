---
title: $strokeText
description: Draw stroke text.
---

Draw stroke text.

## Usage

```
$strokeText[canvas;text;color?;font?;x;y;strokeWidth?;maxWidth?;align?;baseline?]
```

:::note
If you get an error and it says "Invalid Font", its because you provided wrong font syntax ({size}px {font}) or the font is not registered/doesnt exist.
:::

## Parameters

| Field       | Description            | Type              | Required |
| ----------- | ---------------------- | ----------------- | -------- |
| canvas      | The canvas name.       | string            | true     |
| text        | The text.              | string            | true     |
| style       | The text style.        | color \| gradient | false    |
| font        | The text font.         | font              | true     |
| x           | The text X position.   | number            | true     |
| y           | The text Y position.   | number            | true     |
| strokeWidth | The text stroke width. | number            | false    |
| maxWidth    | The text max width.    | number            | false    |
| align       | The text align.        | string            | false    |
| baseline    | The text baseline.     | string            | false    |
