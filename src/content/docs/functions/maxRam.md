---
title: $maxRam
description: $maxRam will return the bot's maximum amount of Ram.
id: maxRam
---

`$maxRam` will return the bot's maximum amount of Ram.

## Usage

```aoi
$maxRam
```

## Example(s)

This will return your bot's maximum amount of available Ram:

```javascript
client.command({
    name: "maxRam",
    code: `
  $maxRam
  `
});
```
