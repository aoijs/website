---
title: $getFilters
description: $getFilters will return all active filters.
id: getFilters
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$getFilters` will return all active filters.

## Usage

```php
$getFilters
```

## Example(s)

This will return the current applied filters:

```javascript
client.command({
  name: "getFilters",
  code: `
    $getFilters
  `,
});
```
