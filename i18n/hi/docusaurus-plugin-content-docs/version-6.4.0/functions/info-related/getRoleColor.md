---
title: '$getRoleColor'
description: '$getRoleColor will return the given role''s color.'
id: getRoleColor
---

`$getRoleColor` will return the given role's color.

## प्रोयोग

```php
$getRoleColor[roleId;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                             |    चाहिए     |
| -------- | ------- | -------------------------------------------------------- |:------------:|
| roleId   | integer | The ID of the role you want the color to be returned of. |     true     |
| guildID? | integer | The ID of the guild where the role exists in.            | असत्य (नहीं) |

## ट्रू (हा)

This will return the role ID of your highest role:

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$highestRole]
  `
});
```