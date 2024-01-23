---
title: $pauseTrack
description: $pauseTrack will pause the current track.
id: pauseTrack
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$pauseTrack` will pause the current track.

## Usage

```php
$pauseTrack
```

## Example(s)

This will pause the current track:

```javascript
client.command({
  name: "pauseTrack",
  code: `
    $pauseTrack
  `,
});
```
