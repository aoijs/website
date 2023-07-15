---
title: '$hoistedRole'
description: '$hoistedRole will return the highest hoisted role of an user.'
id: hoistedRole
---

`$hoistedRole` will return the highest hoisted role of an user.

## प्रोयोग

```php
$hoistedRole[userID?;guildID?;option?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                             |    चाहिए     |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |:------------:|
| userID?  | integer  | The ID of the user.                                                                                                      | असत्य (नहीं) |
| guildID? | integer  | the ID of the guild.                                                                                                     | असत्य (नहीं) |
| option?  | स्ट्रिंग | The option how to return the role <br /> 1. **name** <br /> 2. **id**  (default) <br /> 3. **mention** | असत्य (नहीं) |

## ट्रू (हा)

This will return the name of your highest hoisted role:

```javascript
bot.command({
    name: 'hoistedRole',
    code: `
  $hoistedRole[$authorID;$guildID;name]
  `
});
```
