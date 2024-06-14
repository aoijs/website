---
title: $clearRect
description: Erases pixels in a rect area.
---

Erases pixels in a rect area.

## Usage

```
$clearRect[canvas;x;y;width;height;radius?]
```

## Parameters

| Field  | Description              | Type            | Required |
| ------ | ------------------------ | --------------- | -------- |
| canvas | The canvas name.         | string          | true     |
| x      | The rect X position.     | number          | false    |
| y      | The rect Y position.     | number          | false    |
| width  | The rect width.          | number          | true     |
| height | The rect height.         | number          | true     |
| radius | The rect corners radius. | number \| array | false    |
