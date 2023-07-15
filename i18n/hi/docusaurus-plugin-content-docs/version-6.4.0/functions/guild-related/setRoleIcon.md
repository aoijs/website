---
title: '$setRoleIcon'
description: '$setRoleIcon will set the icon of a specific role.'
id: setRoleIcon
---

`$setRoleIcon` will set the icon of a specific role.

## प्रोयोग

```php
$setRoleIcon[guildID;roleID;icon]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                               | चाहिए        |
| ------- | -------- | ------------------------------------------ | ------------ |
| guildID | integer  | The ID of the guild where the role exists. | असत्य (नहीं) |
| roleID  | integer  | The role ID.                               | असत्य (नहीं) |
| icon    | स्ट्रिंग | The URL of the icon.                       | असत्य (नहीं) |

## ट्रू (हा)

This will change the icon of a given role to the specified icon:

```javascript
bot.command({
    name: 'setRoleIcon',
    code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```