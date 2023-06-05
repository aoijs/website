---
title: $guildRoles
description: Returns Guild Roles.
---

This function returns all the roles the current guild has

```php
$guildRoles[id/name/mention]
```

```javascript
bot.command({
name: "roles", 
code: `Guild Roles: $guildRoles`
/*
name = Developer
id = 773353338393329675
mention = @Developer
*/
})
```

