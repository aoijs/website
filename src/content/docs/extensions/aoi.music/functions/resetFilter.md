---
title: $resetFilter
description: $resetFilter will set all filters.
id: resetFilter
---

`$resetFilter` will set all filters.

## Usage

```php
$resetFilter
```

## Example(s)

This will reset the current applied filters:

```javascript
bot.command({
  name: "resetFilter",
  code: `
    $resetFilter
  `,
});
```
