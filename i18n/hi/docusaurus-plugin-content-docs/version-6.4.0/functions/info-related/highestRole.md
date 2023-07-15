---
title: '$highestRole'
description: '$highestRole will return the highest role of a specific user.'
id: highestRole
---

`$highestRole` will return the highest role of a specific user.

## प्रोयोग

```php
$highestRole[userID?;guildID?;option?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                            |    चाहिए     |
| -------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |:------------:|
| userID?  | integer  | The ID of the user you want the highest role to be returned of.                                                         | असत्य (नहीं) |
| guildID? | integer  | The ID of the guild.                                                                                                    | असत्य (नहीं) |
| option?  | स्ट्रिंग | The option how to return the role <br /> 1. **name** <br /> 2. **id** (default) <br /> 3. **mention** | असत्य (नहीं) |

## ट्रू (हा)

This will return the name of your highest role:

```javascript
bot.command({
    name: 'highestRole',
    code: `
  $highestRole[$authorID;$guildID;name]
  `
});
```
