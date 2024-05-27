---
title: $skipTrack
description: $skipTrack will skip the current track.
id: skipTrack
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$skipTrack` will skip the current track.

## Usage

```aoi
$skipTrack
```

## Example(s)

This will skip the current track:

```javascript
client.command({
    name: "skipTrack",
    code: `
    $skipTrack
  `
});
```
