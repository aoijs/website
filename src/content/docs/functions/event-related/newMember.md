---
title: $newMember
description: $newMember holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)
id: newMember
---

`$newMember` holds data for the member after the update, might be a good idea to check partial option before accessing
any property. (memberUpdate event)

## Usage

```php
$newMember[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

### Options

| Field         | Type                                                                                              | Description                      |
| ------------- | ------------------------------------------------------------------------------------------------- | -------------------------------- |
| id            | integer                                                                                           | Returns User ID.                 |
| name          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns Name of user.            |
| roles         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns User roles.              |
| permissions   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns User permissions.        |
| nick          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns User nickname.           |
| highestRoleID | integer                                                                                           | Returns Higher role ID user has. |

## Example(s)

- **Note: you need `GuildMembers` intent**

```js
client.memberUpdateCommand({
  channel: "channelid",
  code: `
    $username[$newMember[id]] has updated their nickname!
- New Nickname: $newMember[nick]
 - Old Nickname: $oldMember[nick]
 
   $username[$newMember[id]] has updated their name!
- New Name: $newMember[name]
 - Old Name: $oldMember[name]`,
});
```

- This code will execute when **member updates their guild nickname or discord username**

---
