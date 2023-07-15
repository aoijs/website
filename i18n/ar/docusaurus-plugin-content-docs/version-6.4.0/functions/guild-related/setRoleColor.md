---
title: '$setRoleColor'
description: '$setRoleColor will set a roles'' color.'
id: setRoleColor
---

`$setRoleColor` will set a roles' color.

## الاستخدام

```php
$setRoleColor[roleID;color]
```

## البارامترات

| Field  | النوع   | الديسكبربشين                              | مطلوب |
| ------ | ------- | ----------------------------------------- |:-----:|
| roleID | Integer | The ID of the role that will be modified. | true  |
| color  | string  | The new (hex) color.                      | true  |

## مثال

This will change a random role's color to red:

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;Red]`
});
```

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;ED4245]`
});
```