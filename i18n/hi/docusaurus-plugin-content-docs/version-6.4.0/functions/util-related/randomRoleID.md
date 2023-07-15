---
title: '$randomRoleID'
description: '$randomRoleID will return a random role ID of a given guild.'
id: randomRoleID
---

`$randomRoleID` will return a random role ID of a given guild.

## प्रोयोग

```php
$randomRoleID[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                  | चाहिए |
| -------- | ------- | --------------------------------------------- |:-----:|
| guildID? | integer | Where it will return the random role ID from. | true  |

## ट्रू (हा)

This will return a random role ID of your guild:

```javascript
bot.command({
    name: 'randomRoleID',
    code: `
  $randomRoleID[$guildID]
  `
});
```
