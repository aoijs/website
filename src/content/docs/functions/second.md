---
title: $second
description: $second will return the current second in UTC.
id: second
---

`$second` will return the current second in UTC.

## Usage

```aoi
$second
```

## Example(s)

This will returns the current second:

```javascript
client.command({
    name: "second",
    code: `
    $second
    `
});
```

You can change the timezone using `$timezone`:

```javascript
client.command({
    name: "second",
    code: `
    $second 
    $timezone[America/New_York]
    ` // returns current second in New York
});
```
