---
title: $stopPlayer
description: $stopPlayer will destroy the current player.
id: stopPlayer
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

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
  `,
});
```
