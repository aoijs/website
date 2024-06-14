---
title: $packageVersion
description: $packageVersion will return your current aoi.js version.
id: packageVersion
---

`$packageVersion` will return your current aoi.js version.

## Usage

```aoi
$packageVersion
```

## Example(s)

This will return your current aoi.js version:

```javascript
client.command({
    name: "packageVersion",
    code: `
    $packageVersion
    `
});
```
