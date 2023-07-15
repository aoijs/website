---
title: '$setRolePosition'
description: '$setRolePosition will set a roles'' position.'
id: setRolePosition
---

`$setRolePosition` will set a roles' position.

## प्रोयोग

```php
$setRolePosition[roleID;position;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                            |    चाहिए     |
| -------- | ------- | ------------------------------------------------------- |:------------:|
| roleID   | integer | The ID of the role to modify.                           |     true     |
| position | number  | The new position of the role. (1 being the very bottom) |     true     |
| guildID? | integer | The ID of the guild of where the role is located in.    | असत्य (नहीं) |

## ट्रू (हा)

This will change a random role's position to `1` (the bot's highest role must be above that role):

```javascript
bot.command({
    name: 'setRolePosition',
    code: `
   $setRolePosition[$randomRoleID;1;$guildID]`
});
```