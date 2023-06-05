---
title: $status
description: Returns the user's discord status
---

```php
$status[userID (optional)]
```

 
Must enable discord presence intents
 

```javascript
bot.command({
name: "status",
code: `Your Status: $status`
})
```

 
Bot Returns Either: dnd, online, invisible, idle
 

