---
title: $readyTimestamp
description: $readyTimestamp will return the timestamp of when the bot was ready.
id: readyTimestamp
---

`$readyTimestamp` will return the timestamp of when the bot was ready.

## Usage

```php
$readyTimestamp
```

## Example(s)

This will return the last time your bot started/was ready:

```javascript
client.command({
    name: "readyTimestamp",
    code: `
  $readyTimestamp
  `
});
```
