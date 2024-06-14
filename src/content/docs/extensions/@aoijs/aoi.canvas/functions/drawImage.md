---
title: $drawImage
description: Draw an image.
---

Draw an image.

## Usage

```
$drawImage[canvas;src;x;y;width;height;radius?]
```

## Parameters

| Field  | Description               | Type               | Required |
| ------ | ------------------------- | ------------------ | -------- |
| canvas | The canvas name.          | string             | true     |
| src    | The image src.            | string             | true     |
| x      | The image X position.     | number             | true     |
| y      | The image Y position.     | number             | true     |
| width  | The image width.          | number             | true     |
| height | The image height.         | number             | true     |
| radius | The image corners radius. | number \| number[] | false    |

## Example(s)

### This will create a canvas with your avatar.

```
$attachCanvas[avatar]
$drawImage[avatar;$nonEscape[$authorAvatar];0;0;1024;1024]
$createCanvas[avatar;1024;1024]
```

![Preview](../../../../../../images/showcases/avatar.png)
