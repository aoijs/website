---
title: '$findMember'
description: '$findMember will find a specific member in a specific guild by their name.'
id: findMember
---

`$findMember` will find a specific member in a specific guild.

## प्रोयोग

```php
$findMember[userResolver;returnSelf?;guildID?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                          |    चाहिए     |
| ------------ | -------- | ----------------------------------------------------- |:------------:|
| userResolver | स्ट्रिंग | User you want to find.                                |     true     |
| returnSelf?  | boolean  | Return the author ID if the given user was not found. | असत्य (नहीं) |
| guildID?     | integer  | Guild ID where the user is present in.                | असत्य (नहीं) |

## ट्रू (हा)

This will return your ID as `Leref` was not found in the given guild:

```javascript
bot.command({
    name: 'findMember',
    code: `
  $findMember[Leref;true;$guildID]
  `
});
```
