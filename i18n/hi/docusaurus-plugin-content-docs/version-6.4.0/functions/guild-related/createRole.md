---
title: '$createRole'
description: '$createRole will create a new guild role.'
id: createRole
---

`$createRole` will create a new guild role.

## प्रोयोग

```php
$createRole[guildID;returnID;name;color;icon;hoist;unicodeEmoji;position;mentionable;...permissions]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                                           |    चाहिए     |
| -------------- | -------- | ------------------------------------------------------ |:------------:|
| guildID        | integer  | The ID of the guild where the role will be created in. |     true     |
| returnID       | boolean  | Return the ID of the newly created role?               |     true     |
| name           | स्ट्रिंग | The name of the new role.                              |     true     |
| color          | integer  | The color of the new role.                             |     true     |
| icon           | स्ट्रिंग | The image URL that will be used as icon.               | असत्य (नहीं) |
| hoist          | boolean  | If the new role should be hoisted.                     |     true     |
| unicodeEmoji   | स्ट्रिंग | The unicodeEmoji that will be used as icon.            | असत्य (नहीं) |
| position       | integer  | The position of the role, 1 being the very bottom.     |     true     |
| mentionable    | boolean  | If the role is mentionable by `@everyone`.             |     true     |
| ...permissions | स्ट्रिंग | Permissions the role will have.                        | असत्य (नहीं) |

## ट्रू (हा)

This will create a new role called "Bird" in the color of red:

```javascript
bot.command({
    name: 'createRole',
    code: `
    $createRole[$guildID;false;Bird;FF0000;;false;❤;1;false;sendmessages]`
});
```
