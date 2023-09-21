---
title: $authorAvatar
description: $authorAvatar will return the profile picture of the command author.
id: authorAvatar
---

`$authorAvatar` will return the profile picture of the command author.

## Usage

```php
$authorAvatar[size?;dynamic?;format?]
```

## Parameters

| Field    | Type           | Description                               | Required |
| -------- | -------------- | ----------------------------------------- | :------: |
| size?    | string, number | The size of the image                     |  false   |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** |  false   |
| format?  | string         | The format of the returned image.         |  false   |

## Example(s)

This will return your profile picture:

```javascript
client.command({
  name: "authorAvatar",
  code: `
  $authorAvatar[2048;true;webp]
  `,
});
```
