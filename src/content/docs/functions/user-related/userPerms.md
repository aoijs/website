---
title: $userPerms
description: $userPerms will return a user's permission of a specific guild.
id: userPerms
---

`$userPerms` will return a user's permission of a specific guild.

## Usage

```php
$userPerms[userID?;sep?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| userID?  | integer                                                                                           | The user ID.                                    |  false   |
| sep?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to separate multiple returned values. |  false   |
| guildID? | integer                                                                                           | The guild ID.                                   |  false   |

## Example(s)

This will return your permissions:

```javascript
client.command({
  name: "userPerms",
  code: `
  $userPerms[$authorID;, ;$guildID]
  `,
});
```
