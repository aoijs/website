---
title: '$findUser'
description: '$findUser will attempt to find a user which is matching with the given query.'
id: findUser
---

`$findUser` will attempt to find a user which is matching with the given query.

## प्रोयोग

```php
$findUser[userResolver;returnSelf?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                                                          |    चाहिए     |
| ------------ | -------- | ------------------------------------------------------------------------------------- |:------------:|
| userResolver | स्ट्रिंग | Query which is used to find the user.                                                 |     true     |
| returnSelf?  | boolean  | Will return the user ID of the user who executed the command when user was not found. | असत्य (नहीं) |

## ट्रू (हा)

This will search for a user called Ferel, if it wont find the user then it'll return the command author's user ID:

```javascript
bot.command({
    name: 'findUser',
    code: `
  $findUser[Ferel;true]
  `
});
```
