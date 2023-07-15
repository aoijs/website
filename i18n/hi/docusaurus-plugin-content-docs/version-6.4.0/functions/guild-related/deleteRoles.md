---
title: '$deleteRoles'
description: '$deleteRoles will delete one or multiple roles.'
id: deleteRoles
---

`$deleteRoles` will delete one or multiple roles.

## प्रोयोग

```php
$deleteRoles[guildID;...roles]
```

## पैरामीटर्स

| फील्ड    | टाइप            | डिस्क्रिप्शन                                    | चाहिए |
| -------- | --------------- | ----------------------------------------------- |:-----:|
| guildID  | integer         | The guild ID of where the roles are located in. | true  |
| ...roles | integer, string | The Ids of the roles.                           | true  |

## ट्रू (हा)

This will delete roles of your guilds ( make sure to add actual IDs ):

```javascript
bot.command({
    name: 'deleteRoles',
    code: `
  Deleted three roles!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `
});
```