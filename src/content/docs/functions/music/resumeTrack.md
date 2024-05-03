---
title: $resumeTrack
description: $resumeTrack will resume the current paused track.
id: resumeTrack
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$resumeTrack` will resume the current paused track.

## Usage

```php
$resumeTrack
```

## Example(s)

This will resume the current track:

```javascript
client.command({
    name: "resumeTrack",
    code: `
    $resumeTrack
  `
});
```
