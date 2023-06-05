---
title: $roleName
description: Returns a Role name using their ID
---

This function returns the name of the specified role

```php
$roleName[roleID]
```

```javascript
bot.command({
name: "roleinfo", 
code: `
Role name: $roleName[$mentionedRoles[1]]
Role ID: $mentionedRoles[1]` 
})
```

