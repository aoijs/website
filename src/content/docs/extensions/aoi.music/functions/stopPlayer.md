---
title: $stopPlayer
description: $stopPlayer will destroy the current player.
id: stopPlayer
---

`$stopPlayer` will destroy the current player.

## Usage

```php
$stopPlayer
```

## Example(s)

This will destroy the current player:

```javascript
client.command({
  name: "stopPlayer",
  code: `
    $stopPlayer
  `
});
```
