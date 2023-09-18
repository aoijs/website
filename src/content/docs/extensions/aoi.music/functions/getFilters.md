---
title: $getFilters
description: $getFilters will return all active filters.
id: getFilters
---

`$getFilters` will return all active filters.

## Usage

```php
$getFilters
```

## Example(s)

This will return the current applied filters:

```javascript
bot.command({
  name: "getFilters",
  code: `
    $getFilters
  `,
});
```
