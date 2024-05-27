---
title: $hour
description: $hour will return the current hour in UTC.
id: hour
---

`$hour` will return the current hour in UTC.

## Usage

```aoi
$hour
```

## Example(s)

This will returns the current hour:

```javascript
client.command({
    name: "hour",
    code: `
    $hour
    `
});
```

You can change the timezone using `$timezone`:

```javascript
client.command({
    name: "hour",
    code: `
    $hour 
    $timezone[America/New_York]
    ` // returns current hour in New York
});
```
