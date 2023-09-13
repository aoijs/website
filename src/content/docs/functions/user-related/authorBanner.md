---
title: $authorBanner
description: $authorBanner will return the banner of the command author.
id: authorBanner
---

`$authorBanner` will return the banner of the command author.

## Usage

```php
$authorBanner[size?;dynamic?;extension?]
```

## Parameters

| Field      | Type           | Description                               | Required |
| ---------- | -------------- | ----------------------------------------- | :------: |
| size?      | string, number | The size of the image                     |  false   |
| dynamic?   | boolean        | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | string         | The format of the returned image.         |  false   |

## Example(s)

This will return your banner (if any):

```javascript
bot.command({
  name: "authorBanner",
  code: `
  $authorBanner[2048;true;webp]
  `,
});
```
