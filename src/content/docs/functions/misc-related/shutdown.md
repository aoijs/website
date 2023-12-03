---
title: $shutdown
description: $shutdown will shutdown / end the process of your bot.
id: shutdown
---

`$shutdown` will shutdown / end the process of your bot.

## Usage

```php
$shutdown
```

## Example(s)

This will shutdown your bot:

```javascript
client.command({
  name: "shutdown",
  code: `
    $shutdown
    `
});
```
