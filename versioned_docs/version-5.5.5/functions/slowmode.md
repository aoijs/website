---
title: $slowmode
description: Sets a slowmode to the given channel
---

This function sets a cooldown to the given channel ID. `0` will set the cooldown to none

```php
$slowmode[time/0;channelID]
```

 
Discord does not allow you to go over 6 hours
 

```javascript
bot.command({
name: "slowmode",
code: `Set the channel slowmode
$slowmode[5m;$channelID]` //Sets the current channel slowmode to 5 minutes
})
```

