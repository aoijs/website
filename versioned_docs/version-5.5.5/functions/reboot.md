---
title: $reboot
---

This function technically allows you a restart the bot, or a file

## Usage

```php
$reboot[path]
```

### Example

```javascript
bot.command({
name: "reboot",
code: `$reboot[server.js]`,
}) //server.js aka our main file, this will restart the bot
```

