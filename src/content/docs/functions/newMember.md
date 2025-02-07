---
title: $newMember
description: $newMember holds data for the member after the update, might be a good idea to check partial option before accessing any property. (memberUpdate event)
id: newMember
---

`$newMember` holds data for the member after the update, might be a good idea to check partial option before accessing
any property. (memberUpdate event)

## Usage

```aoi
$newMember[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

## Options

| Field          | Type                                                                                                | Description                            |
| -------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------- |
| id             | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns User ID.                       |
| name           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns Name of user.                  |
| roles          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns User roles.                    |
| permissions    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns User permissions.              |
| nick           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns User nickname.                 |
| highestRoleID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns Higher role ID user has.       |
| joinedStamp    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns user joined timestamp.         |
| newPermissions | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns new permissions added to user. |
| addedRoles     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Returns new roles added to user.       |
| bannable       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns if user is bannable.           |
| kickable       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns if user is kickable.           |
| manageable     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns if user is manageable.         |

## Example(s)

-   **Note: you need `GuildMembers` intent**

```js
client.memberUpdateCommand({
    channel: "channelid",
    code: `
    $username[$newMember[id]] has updated their nickname!
- New Nickname: $newMember[nick]
 - Old Nickname: $oldMember[nick]
 
   $username[$newMember[id]] has updated their name!
- New Name: $newMember[name]
 - Old Name: $oldMember[name]`
});
```

-   This code will execute when **member updates their guild nickname or Discord username**
