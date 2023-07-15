---
title: '$modifyRole'
description: '$modifyRole will modify a given role.'
id: modifyRole
---

`$modifyRole` will modify a given role.

## प्रोयोग

```php
$modifyRole[guildID;roleID;...data]
```

## पैरामीटर्स

| फील्ड   | टाइप           | डिस्क्रिप्शन                                  | चाहिए |
| ------- | -------------- | --------------------------------------------- |:-----:|
| guildID | integer        | The guild ID of where the role is located in. | true  |
| roleID  | integer        | The role ID to modify.                        | true  |
| ...data | string, object | New Role Data.                                | true  |

## ट्रू (हा)

This will edit a existing role / change its name to "Awesome!":

```javascript
bot.command({
    name: 'modifyRole',
    code: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `
});
```