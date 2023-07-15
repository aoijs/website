---
title: '$getRoleColor'
description: '$getRoleColor will return the given role''s color.'
id: getRoleColor
---

`$getRoleColor` will return the given role's color.

## الاستخدام

```php
$getRoleColor[roleId;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                             | مطلوب |
| -------- | ------- | -------------------------------------------------------- |:-----:|
| roleId   | Integer | The ID of the role you want the color to be returned of. | true  |
| guildID? | Integer | The ID of the guild where the role exists in.            | false |

## مثال

This will return the role ID of your highest role:

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$userHighestRole]
  `
});
```