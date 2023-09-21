---
title: $executionTime
description: $executionTime will return the execution time.
id: executionTime
---

`$executionTime` will return the execution time.

## Usage

```php
$executionTime
```

## Example(s)

This will return the execution time of how long it took to execute this code:

```javascript
client.command({
  name: "executionTime",
  code: `
    This took: $executionTime MS
  `,
});
```
