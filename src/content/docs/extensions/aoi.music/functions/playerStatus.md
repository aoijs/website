---
title: $playerStatus
description: $playerStatus will return the current Player Status.
id: playerStatus
---

`$playerStatus` will return the current Player Status.

## Usage

```php
$playerStatus
```

## Example(s)

This will return the current player status:

```javascript
bot.command({
  name: "playerStatus",
  code: `
    $playerStatus
  `,
});
```
