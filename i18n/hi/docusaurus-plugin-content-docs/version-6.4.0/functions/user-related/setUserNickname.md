---
title: '$setUserNickname'
description: '$setUserNickname will change a nickname of a guild member.'
id: setUserNickname
---

`$setUserNickname` will change a nickname of a guild member.

## प्रोयोग

```php
$setUserNickname[userID;newName;reason?]
```

## पैरामीटर्स

| फील्ड   | टाइप           | डिस्क्रिप्शन                                             |    चाहिए     |
| ------- | -------------- | -------------------------------------------------------- |:------------:|
| userID  | integer        | The user ID of the user whose nickname shall be changed. |     true     |
| newName | string, number | Their new nickname.                                      |     true     |
| reason? | string, number | Reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will change your nickname to "I love aoi.js": (wont work if you're the guild owner)

```javascript
bot.command({
    name: 'setUserNickname',
    code: `
  $setUserNickname[$authorID;I love aoi.js;They simply love aoi.js]
  `
});
```
