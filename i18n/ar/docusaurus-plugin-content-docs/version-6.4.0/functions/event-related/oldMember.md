---
title: '$oldMember'
description: '$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it''s cached, so use partial option before attempting to access any property. (memberUpdate event)'
id: oldMember
---

`$oldMember` holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)

## الاستخدام

```php
$oldMember[option]
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