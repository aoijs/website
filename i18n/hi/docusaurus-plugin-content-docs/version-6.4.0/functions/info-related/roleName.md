---
title: '$roleName'
description: '$roleName will return the name of a specific role.'
id: roleName
---

`$roleName` will return the name of a specific role.

## प्रोयोग

```php
$roleName[roleID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                   |    चाहिए     |
| -------- | ------- | -------------------------------------------------------------- |:------------:|
| roleID   | integer | The role ID of which you want the role name to be returned of. |     true     |
| guildID? | integer | The guild ID.                                                  | असत्य (नहीं) |

## ट्रू (हा)

This will return the role name of any role you may like, in this case, It would return `@everyone`:

```javascript
bot.command({
    name: 'roleName',
    code: `
  \`$roleName[$guildID]\`
  `
});
```
