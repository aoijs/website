---
title: $date
description: $date will return the day of the month.
id: date
---

`$date` will return the day of the month.

## Usage

```php
$date
```

## Example(s)

This will return day of the month, for example, `28`:

```javascript
client.command({
    name: "date",
    code: `
  $date
  `
});
```
