---
title: '$roleId'
description: '$roleId will return the ID of a role.'
id: roleId
---

`$roleId` will return the ID of a role.

## प्रोयोग

```php
$roleId[roleResolver;guildID?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                   |    चाहिए     |
| ------------ | -------- | ---------------------------------------------- |:------------:|
| roleResolver | स्ट्रिंग | Name of the role.                              |     true     |
| guildID?     | स्ट्रिंग | ID of the guild where the role was created in. | असत्य (नहीं) |

## ट्रू (हा)

This will return the role ID of a role called `Owner` (this example won't work if you dont have that role):

```javascript
bot.command({
    name: 'roleId',
    code: `
  $roleId[Owner;$guildID]
  `
});
```