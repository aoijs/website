---
title: '$setRoleColor'
description: '$setRoleColor will set a roles'' color.'
id: setRoleColor
---

`$setRoleColor` will set a roles' color.

## प्रोयोग

```php
$setRoleColor[roleID;color]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                              | चाहिए |
| ------ | -------- | ----------------------------------------- |:-----:|
| roleID | integer  | The ID of the role that will be modified. | true  |
| color  | स्ट्रिंग | The new (hex) color.                      | true  |

## ट्रू (हा)

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