---
title: $loopStatus
description: $loopStatus will return the current loop status.
id: loopStatus
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$loopStatus` will return the current loop status.

## Usage

```php
$loopStatus
```

## Example(s)

This will return the current loop status:

```javascript
client.command({
  name: "loopStatus",
  code: `
    $loopStatus
  `,
});
```
