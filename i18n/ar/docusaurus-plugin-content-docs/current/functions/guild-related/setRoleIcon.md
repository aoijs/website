---
title: '$setRoleIcon'
description: '$setRoleIcon will set the icon of a specific role.'
id: setRoleIcon
---

`$setRoleIcon` will set the icon of a specific role.

## الاستخدام

```php
$setRoleIcon[guildID;roleID;icon]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                               | مطلوب |
| ------- | ------- | ------------------------------------------ | ----- |
| guildID | Integer | The ID of the guild where the role exists. | false |
| roleID  | Integer | The role ID.                               | false |
| icon    | string  | The URL of the icon.                       | false |

## مثال

This will change the icon of a given role to the specified icon:

```javascript
bot.command({
    name: 'setRoleIcon',
    code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```