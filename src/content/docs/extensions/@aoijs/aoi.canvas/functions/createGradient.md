---
title: $createGradient
description: Creates a gradient.
---

Creates a gradient.

## Usage

```
$createGradient[canvas;gradient;type;...options]
```

## Parameters

| Field      | Description                                             | Type           | Required |
| ---------- | ------------------------------------------------------- | -------------- | -------- |
| canvas     | The canvas name.                                        | string         | true     |
| gradient   | The gradient name.                                      | string         | true     |
| type       | The gradient type (0 = linear / 1 = radial / 2 = conic) | 0 \| 1 \| 2 \| | true     |
| ...options | The gradient options.                                   | number         | true     |
