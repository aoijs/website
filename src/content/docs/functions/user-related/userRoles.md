---
title: $userRoles
description: $userRoles will return the roles of a specific user.
id: userRoles
---

`$userRoles` will return the roles of a specific user.

## Usage

```php
$userRoles[userID?;guildID?;option?;sep?]
```

## Parameters

| Field    | Type    | Description                                                                                 | Required |
| -------- | ------- | ------------------------------------------------------------------------------------------- | :------: |
| userID?  | integer | The user ID.                                                                                |  false   |
| guildID? | integer | The guild ID.                                                                               |  false   |
| option?  | string  | How to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |  false   |
| sep?     | string  | Separator to separate multiple returned values.                                             |  false   |

## Example(s)

This will return your roles:

```javascript
client.command({
  name: "userRoles",
  code: `
  $userRoles[$authorID;$guildID;id;, ]
  `,
});
```
