---
title: $playPreviousTrack
description: $playPreviousTrack will play the previous track.
id: playPreviousTrack
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$playPreviousTrack` will play the previous track.

## Usage

```aoi
$playPreviousTrack
```

## Example(s)

This will play the previous track:

```javascript
client.command({
    name: "playPreviousTrack",
    code: `
    $playPreviousTrack
  `
});
```
