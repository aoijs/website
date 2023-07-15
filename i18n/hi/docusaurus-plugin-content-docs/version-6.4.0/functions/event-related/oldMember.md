---
title: '$oldMember'
description: '$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it''s cached, so use partial option before attempting to access any property. (memberUpdate event)'
id: oldMember
---

`$oldMember` holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)

## प्रोयोग

```php
$oldMember[option]
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
- **Note: You need `GuildMembers` intent**

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