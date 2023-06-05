---
title: $setUserVar
description: Sets a user variable value (Local)
---

This function set's a users variable. The value will be assigned to the user and only will be for the current/specified guild

```php
$setUserVar[variable;value;user ID (optional);guild ID]
```

```javascript
bot.command({
name: "setUserVar",
code: `Set a user var
$setUserVar[money;5]`
})
```

