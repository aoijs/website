---
title: $deleteCommand
description: $deleteCommand will delete the initial command message.
id: deleteCommand
---

`$deleteCommand` will delete the initial command message.

## Usage

```php
$deleteCommand
```

## Example(s)

This will delete the initial command message:

```javascript
client.command({
  name: "deleteCommand",
  code: `
  Hello!
  $deleteCommand
  `
});
```
