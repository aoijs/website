---
title: '$newMember'
description: '$newMember holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)'
id: newMember
---

`$newMember` holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)

## الاستخدام

```php
$newMember[option]
```

## البارامترات

| Field  | النوع  | الديسكبربشين        | مطلوب |
| ------ | ------ | ------------------- |:-----:|
| option | string | Option to retrieve. | true  |

### Options

| Field         | النوع   | الديسكبربشين                     |
| ------------- | ------- | -------------------------------- |
| id            | Integer | Returns User ID.                 |
| name          | string  | Returns Name of user.            |
| roles         | string  | Returns User roles.              |
| permissions   | string  | Returns User permissions.        |
| nick          | string  | Returns User nickname.           |
| highestRoleID | Integer | Returns Higher role ID user has. |

## مثال
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