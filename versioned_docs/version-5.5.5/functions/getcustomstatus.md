---
title: $getCustomStatus
description: Gets the user's custom status state. (if any)
---

This function returns the custom status of the given user, if they have one

```php
$getCustomStatus[userID (optional);state/emoji]
```


state - The message, emoji - the emoji
 

```javascript
bot.command({
name:"customstatus",
code:`$getCustomStatus[502968724207304714;state]`
})
```

