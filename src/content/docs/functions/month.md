---
title: $month
description: $month will return the current month.
id: month
---

`$month` will return the current month.

## Usage

```aoi
$month
```

## Example(s)

This will return the current month:

```javascript
client.command({
    name: "month",
    code: `
    $month
    `
});
```
