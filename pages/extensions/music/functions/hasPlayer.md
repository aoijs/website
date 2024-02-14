---
title: $hasPlayer
description: $hasPlayer will return either true or false depending on if the current instance has a player in the current guild.
id: hasPlayer
extension: true
---

`$hasPlayer` will return either true or false depending on if the current instance has a player in the current guild.

## Usage

```php
$hasPlayer
```

## Example(s)

This will return either true or false depending on if your bot has a player in the current guild or not:

```javascript
client.command({
  name: "hasPlayer",
  code: `
    $hasPlayer
  `,
});
```
