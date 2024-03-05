---
title: $stopTrack
description: $stopTrack will stop the current track.
id: stopTrack
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$stopTrack` will stop the current track.

## Usage

```php
$stopTrack
```

## Example(s)

This will stop the current track:

```javascript
client.command({
  name: "stopTrack",
  code: `
    $stopTrack
  `,
});
```
