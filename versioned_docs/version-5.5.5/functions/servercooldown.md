---
title: $serverCooldown
description: Sets a server cooldown
---

This function creates a cooldown for the command in the current guild

```php
$serverCooldown[time;error when cooldown activated]
```


%time% returns the remaining cooldown time
 

```javascript
bot.command({
name: "serverCooldown",
code: `Cooldown command
$serverCooldown[15s;Theres a cooldown!]`
})
```

