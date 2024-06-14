---
title: $packageDependencies
description: $packageDependencies will return aoi.js' package dependencies.
id: packageDependencies
---

`$packageDependencies` will return aoi.js' package dependencies.

## Usage

```aoi
$packageDependencies
```

## Example(s)

This will return aoi.js' package dependencies:

```javascript
client.command({
    name: "packageDependencies",
    code: `
    $packageDependencies
    ` // Should return "@aoijs/aoi.db, axios, discord-api-types, discord.js, undici"
});
```
