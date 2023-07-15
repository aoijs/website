---
title: '$createRole'
description: '$createRole will create a new guild role.'
id: createRole
---

`$createRole` will create a new guild role.

## الاستخدام

```php
$createRole[guildID;returnID;name;color;icon;hoist;unicodeEmoji;position;mentionable;...permissions]
```

## البارامترات

| Field          | النوع   | الديسكبربشين                                           | مطلوب |
| -------------- | ------- | ------------------------------------------------------ |:-----:|
| guildID        | Integer | The ID of the guild where the role will be created in. | true  |
| returnID       | boolean | Return the ID of the newly created role?               | true  |
| name           | string  | The name of the new role.                              | true  |
| color          | Integer | The color of the new role.                             | true  |
| icon           | string  | The image URL that will be used as icon.               | false |
| hoist          | boolean | If the new role should be hoisted.                     | true  |
| unicodeEmoji   | string  | The unicodeEmoji that will be used as icon.            | false |
| position       | Integer | The position of the role, 1 being the very bottom.     | true  |
| mentionable    | boolean | If the role is mentionable by `@everyone`.             | true  |
| ...permissions | string  | Permissions the role will have.                        | false |

## مثال

This will create a new role called "Bird" in the color of red:

```javascript
bot.command({
    name: 'createRole',
    code: `
    $createRole[$guildID;false;Bird;FF0000;;false;❤;1;false;sendmessages]`
});
```
