---
title: $measureText
description: Measure some text.
---

Measure some text.

## Usage

```
$measureText[canvas;text;font?;property?]
```

## Parameters

| Field    | Description          | Type                                                                                  | Required |
| -------- | -------------------- | ------------------------------------------------------------------------------------- | -------- |
| canvas   | The canvas name.     | string                                                                                | true     |
| text     | The text to measure. | string                                                                                | true     |
| font     | The text font.       | font                                                                                  | false    |
| property | Property.            | "json" \| [TextMetrics](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics) | false    |
