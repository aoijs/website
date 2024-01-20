---
title: $resetFilter
description: $resetFilter will set all filters.
id: resetFilter
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$resetFilter` will set all filters.

## Usage

```php
$resetFilter
```

## Example(s)

This will reset the current applied filters:

```javascript
client.command({
  name: "resetFilter",
  code: `
    $resetFilter
  `,
});
```
