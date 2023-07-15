---
title: '$newMember'
description: '$newMember holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)'
id: newMember
---

`$newMember` holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)

## प्रोयोग

```php
$newMember[option]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन        | चाहिए |
| ------ | -------- | ------------------- |:-----:|
| option | स्ट्रिंग | Option to retrieve. | true  |

### Options

| फील्ड         | टाइप     | डिस्क्रिप्शन                     |
| ------------- | -------- | -------------------------------- |
| id            | integer  | Returns User ID.                 |
| name          | स्ट्रिंग | Returns Name of user.            |
| roles         | स्ट्रिंग | Returns User roles.              |
| permissions   | स्ट्रिंग | Returns User permissions.        |
| nick          | स्ट्रिंग | Returns User nickname.           |
| highestRoleID | integer  | Returns Higher role ID user has. |

## ट्रू (हा)
- **Note: you need `GuildMembers` intent**

```js
bot.memberUpdateCommand({
    channel: "channelid",
    code: `
    $username[$newMember[id]] has updated their nickname!
- New Nickname: $newMember[nick]
 - Old Nickname: $oldMember[nick]

   $username[$newMember[id]] has updated their name!
- New Name: $newMember[name]
 - Old Name: $oldMember[name]`
})
```
- This code will execute when __member updates their guild nickname or discord username__

---