---
title: $reboot
description: $reboot will restart your bot.
id: reboot
---

`$reboot` will restart your bot.

## Usage

```php
$reboot
```

## Example(s)

This will restart your bot:

```javascript
client.command({
    name: "reboot",
    code: `
    $reboot
    `
});
```
