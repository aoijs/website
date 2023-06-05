---
title: $loopStatus
description: $loopStatus will return the current loop status. 
id: loopStatus
---

`$loopStatus` will return the current loop status.

## Usage

```php
$loopStatus
```

## Example(s)

This will return the current loop status:

```javascript
bot.command({
    name: 'loopStatus',
    code: `
    $loopStatus
  `
});
```