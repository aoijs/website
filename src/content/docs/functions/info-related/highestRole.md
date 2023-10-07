---
title: $userHighestRole
description: $userHighestRole will return the highest role of a specific user.
id: userHighestRole
---

`$userHighestRole` will return the highest role of a specific user.

## Usage

```php
$userHighestRole[userID?;guildID?;option?]
```

## Parameters

| Field    | Type    | Description                                                                                           | Required |
| -------- | ------- | ----------------------------------------------------------------------------------------------------- | :------: |
| userID?  | integer | The ID of the user you want the highest role to be returned of.                                       |  false   |
| guildID? | integer | The ID of the guild.                                                                                  |  false   |
| option?  | string  | The option how to return the role <br /> 1. **name** <br /> 2. **id** (default) <br /> 3. **mention** |  false   |

## Example(s)

This will return the name of your highest role:

```javascript
client.command({
  name: "userHighestRole",
  code: `
  $userHighestRole[$authorID;$guildID;name]
  `
});
```
