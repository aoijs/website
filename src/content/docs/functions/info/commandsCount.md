---
title: $commandsCount
description: $commandsCount will return the amount of commands.
id: commandsCount
---

`$commandsCount` will return the amount of commands.

## Usage

```php
$commandsCount
```

## Example(s)

This will return the the amount of your commands:

```javascript
client.command({
  name: "commandsCount",
  code: `
  $commandsCount
  `
});
```
