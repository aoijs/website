---
title: $year
description: $year will return the current year in CST.
id: year
---

`$year` will return the current year in CST.

## Usage

```php
$year
```

## Example(s)

This will returns the current year:

```javascript
client.command({
  name: "year",
  code: `
    $year
    `
});
```

You can change the timezone using `$timezone`:

```javascript
client.command({
  name: "year",
  code: `
    $year 
    $timezone[America/New_York]
    `, // returns current year in New York
});
```
