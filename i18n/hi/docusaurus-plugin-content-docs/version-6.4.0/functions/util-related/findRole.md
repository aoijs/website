---
title: '$findRole'
description: '$findRole will search and return a given role of a certain guild.'
id: findRole
---

`$findRole` will search and return a given role of a certain guild.

## प्रोयोग

```php
$findRole[roleResolver;guildID?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                           |    चाहिए     |
| ------------ | -------- | -------------------------------------- |:------------:|
| roleResolver | स्ट्रिंग | Name of the role you want to find.     |     true     |
| guildID?     | integer  | Guild ID where the role is present in. | असत्य (नहीं) |

## ट्रू (हा)

This will return the role ID of the role `Owner` if it exists:

```javascript
bot.command({
    name: 'findRole',
    code: `
  $findRole[Owner;$guildID]
  `
});
```
