---
title: $setChannelVar
description: Sets a variable value to the current or given channel
---

This function sets a value to the current/specified channel

```php
$setChannelVar[variable;value;channel ID (optional)]
```

```javascript
bot.command({
name: "setChannelVar",
code: `Set the channel var!
$setChannelVar[messageCount;12]`
})
```

