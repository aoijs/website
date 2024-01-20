---
title: $skipTrack
description: $skipTrack will skip the current track.
id: skipTrack
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$skipTrack` will skip the current track.

## Usage

```php
$skipTrack
```

## Example(s)

This will skip the current track:

```javascript
client.command({
  name: "skipTrack",
  code: `
    $skipTrack
  `,
});
```
