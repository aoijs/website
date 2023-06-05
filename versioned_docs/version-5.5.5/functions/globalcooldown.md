---
title: $globalCooldown
description: Set a Global cooldown, with all Guilds
---

```php
$globalCooldown[time;error when cooldown activated]
```

```javascript
bot.command({
name: "hello", 
code: `
$description[Hello!]
$globalCooldown[1m;Hey, you need to wait 1m!]
})
```