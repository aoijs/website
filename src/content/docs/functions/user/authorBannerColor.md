---
title: $authorBannerColor
description: $authorBannerColor will return the profile banner color of the command author.
id: authorBannerColor
---

`$authorBannerColor` will return the profile banner color of the command author.

## Usage

```aoi
$authorBannerColor
```

## Example(s)

This will return your profile banner color (if any):

```javascript
client.command({
    name: "userBanner",
    code: `
  $authorBannerColor
  `
});
```
