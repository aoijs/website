---
title: '$memberExists'
description: '$memberExists check if a given user is member of the given guild.'
id: memberExists
---

`$memberExists` check if a given user is member of the given guild.

## प्रोयोग

```php
$memberExists[userID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                                       | चाहिए        |
| -------- | ------- | ---------------------------------------------------------------------------------- | ------------ |
| userID   | integer | id of the user you want to check if they're currently a member of the given server | true         |
| guildID? | integer | the server where the user is present in                                            | असत्य (नहीं) |

## ट्रू (हा)

This will return `true` as you're currently in this guild:

```javascript
bot.command({
    name: 'memberExists',
    code: `
  $memberExists[$authorid;$guildID]
  `
});
```
