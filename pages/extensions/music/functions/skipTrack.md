---
title: $skipTrack
description: $skipTrack will skip the current track.
id: skipTrack
extension: true
---

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
