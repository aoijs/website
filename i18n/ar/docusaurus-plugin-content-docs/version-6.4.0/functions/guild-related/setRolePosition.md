---
title: '$setRolePosition'
description: '$setRolePosition will set a roles'' position.'
id: setRolePosition
---

`$setRolePosition` will set a roles' position.

## الاستخدام

```php
$setRolePosition[roleID;position;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                            | مطلوب |
| -------- | ------- | ------------------------------------------------------- |:-----:|
| roleID   | Integer | The ID of the role to modify.                           | true  |
| position | number  | The new position of the role. (1 being the very bottom) | true  |
| guildID? | Integer | The ID of the guild of where the role is located in.    | false |

## مثال

This will change a random role's position to `1` (the bot's highest role must be above that role):

```javascript
bot.command({
    name: 'setRolePosition',
    code: `
   $setRolePosition[$randomRoleID;1;$guildID]`
});
```