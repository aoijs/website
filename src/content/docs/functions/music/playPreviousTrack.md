---
title: $playPreviousTrack
description: $playPreviousTrack will play the previous track.
id: playPreviousTrack
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$playPreviousTrack` will play the previous track.

## Usage

```php
$playPreviousTrack
```

## Example(s)

This will play the previous track:

```javascript
client.command({
  name: "playPreviousTrack",
  code: `
    $playPreviousTrack
  `,
});
```
