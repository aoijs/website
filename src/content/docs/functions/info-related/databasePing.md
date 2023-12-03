---
title: $databasePing
description: $databasePing will return your database ping.
id: databasePing
---

`$databasePing` will return your database ping.

## Usage

```php
$databasePing
```

## Example(s)

This will return your database ping:

```javascript
client.command({
  name: "databasePing",
  code: `
  My database ping is: $databasePing MS!
  `
});
```
