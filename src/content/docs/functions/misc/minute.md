---
title: $minute
description: $minute will return the current minute in UTC.
id: minute
---

`$minute` will return the current minute in UTC.

## Usage

```aoi
$minute
```

## Example(s)

This will returns the current minute:

```javascript
client.command({
    name: "minute",
    code: `
    $minute
    `
});
```

You can change the timezone using `$timezone`:

```javascript
client.command({
    name: "minute",
    code: `
    $minute 
    $timezone[America/New_York]
    ` // returns current minute in New York
});
```
