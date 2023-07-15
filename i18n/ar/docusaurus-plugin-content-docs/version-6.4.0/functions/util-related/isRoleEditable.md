---
title: '$isRoleEditable'
description: '$isRoleEditable will check if the role is editable.'
id: isRoleEditable
---

`$isRoleEditable` will check if the role is editable.

## الاستخدام

```php
$isRoleEditable[roleID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                      | مطلوب |
| -------- | ------- | ------------------------------------------------- |:-----:|
| roleID   | Integer | ID of the role you want to check if its editable. | true  |
| guildID? | Integer | The ID of the guild where the role exists.        | false |

## مثال

This will check if a role called `Owner` is editable:

```javascript
bot.command({
    name: 'isRoleEditable',
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
