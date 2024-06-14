---
title: $strokeRect
description: Draws a new stroke rect.
---

Draws a new stroke rect.

## Usage

```
$strokeRect[canvas;color;x?;y?;width?;height?;strokeWidth?;radius?]
```

## Parameters

| Field       | Description              | Type                         | Required |
| ----------- | ------------------------ | ---------------------------- | -------- |
| canvas      | The canvas name.         | string                       | true     |
| style       | The rect style.          | color \| gradient \| pattern | true     |
| x           | The rect X position.     | number                       | false    |
| y           | The rect Y position.     | number                       | false    |
| width       | The rect width.          | number                       | false    |
| height      | The rect height.         | number                       | false    |
| strokeWidth | The rect stroke width.   | number                       | false    |
| radius      | The rect corners radius. | number \| number[]           | false    |
