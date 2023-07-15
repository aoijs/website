---
title: '$roleName'
description: '$roleName will return the name of a specific role.'
id: roleName
---

`$roleName` will return the name of a specific role.

## الاستخدام

```php
$roleName[roleID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                   | مطلوب |
| -------- | ------- | -------------------------------------------------------------- |:-----:|
| roleID   | Integer | The role ID of which you want the role name to be returned of. | true  |
| guildID? | Integer | The guild ID.                                                  | false |

## مثال

This will return the role name of any role you may like, in this case, It would return `@everyone`:

```javascript
bot.command({
    name: 'roleName',
    code: `
  \`$roleName[$guildID]\`
  `
});
```
