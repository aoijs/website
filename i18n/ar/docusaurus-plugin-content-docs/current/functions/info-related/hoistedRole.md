---
title: '$hoistedRole'
description: '$hoistedRole will return the highest hoisted role of an user.'
id: hoistedRole
---

`$hoistedRole` will return the highest hoisted role of an user.

## الاستخدام

```php
$hoistedRole[userID?;guildID?;option?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                                                             | مطلوب |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |:-----:|
| userID?  | Integer | اي دي المستخدم.                                                                                                          | false |
| guildID? | Integer | the ID of the guild.                                                                                                     | false |
| option?  | string  | The option how to return the role <br /> 1. **name** <br /> 2. **id**  (default) <br /> 3. **mention** | false |

## مثال

This will return the name of your highest hoisted role:

```javascript
bot.command({
    name: 'hoistedRole',
    code: `
  $hoistedRole[$authorID;$guildID;name]
  `
});
```
