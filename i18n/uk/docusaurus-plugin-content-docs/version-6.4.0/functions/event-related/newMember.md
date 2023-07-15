---
title: '$newMember'
description: '$newMember holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)'
id: newMember
---

`$newMember` holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)

## Використання

```php
$newMember[option]
```

## Параметри

| Поле   | Тип   | Опис                | Обов'язковий |
| ------ | ----- | ------------------- |:------------:|
| option | рядок | Option to retrieve. |     так      |

### Options

| Поле          | Тип     | Опис                             |
| ------------- | ------- | -------------------------------- |
| id            | integer | Returns User ID.                 |
| назва         | рядок   | Returns Name of user.            |
| roles         | рядок   | Returns User roles.              |
| permissions   | рядок   | Returns User permissions.        |
| nick          | рядок   | Returns User nickname.           |
| highestRoleID | integer | Returns Higher role ID user has. |

## Приклад(и)
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