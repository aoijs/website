---
title: $takeRoles
description: Takes a role or roles from given user ID
---

This function takes the given role\(s\) from the given user

## Usage

```php
$takeRoles[guildID;userID;roleID;roleID2;...]
```

## Example

```javascript
bot.command({
name: "take",
code: `$takeRoles[$guildID;$authorID;779354499865116673]`
})
```



