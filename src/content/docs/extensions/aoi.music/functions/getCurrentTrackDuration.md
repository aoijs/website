---
title: $getCurrentTrackDuration
description: $getCurrentTrackDuration will return the current track duration.
id: getCurrentTrackDuration
---

`$getCurrentTrackDuration` will return the current track duration.

## Usage

```php
$getCurrentTrackDuration
```

## Example(s)

This will return the current track duration in ms:

```javascript
client.command({
  name: "getCurrentTrackDuration",
  code: `
    $getCurrentTrackDuration
  `,
});
```
