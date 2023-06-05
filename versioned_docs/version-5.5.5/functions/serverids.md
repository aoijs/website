---
title: $serverIDs
description: Returns all the server IDs the bot is in
---

```php
$serverIDs[separator (optional)]
```


Separator is the symbol that separates each server ID
 

```javascript
bot.command({
name: "serverIDs",
code: `Server IDs: $serverIDs[,]`
//will return: serverid,serverid,serverid,etc
})
```

