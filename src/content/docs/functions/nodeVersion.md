---
title: $nodeVersion
description: $nodeVersion will return your current node.js version.
id: nodeVersion
---

`$nodeVersion` will return your current node.js version.

## Usage

```aoi
$nodeVersion
```

## Example(s)

This will return the current node.js version your bot is running on:

```javascript
client.command({
    name: "nodeVersion",
    code: `
    $nodeVersion
    `
});
```
