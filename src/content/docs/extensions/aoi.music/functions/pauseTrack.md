---
title: $pauseTrack
description: $pauseTrack will pause the current track.
id: pauseTrack
---

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
