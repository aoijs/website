---
title: $randomEmoji
description: $randomEmoji will return a random emoji ID.
id: randomEmoji
---

`$randomEmoji` will return a random emoji ID.

## Usage

```php
$randomEmoji
```

## Example(s)

This will return a random emoji ID of your guild:

```javascript
client.command({
  name: "randomEmoji",
  code: `
  $randomEmoji
  `
});
```
