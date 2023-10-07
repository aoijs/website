---
title: $findUser
description: $findUser will attempt to find a user which is matching with the given query.
id: findUser
---

`$findUser` will attempt to find a user which is matching with the given query.

## Usage

```php
$findUser[userResolver;returnSelf?]
```

## Parameters

| Field        | Type    | Description                                                                           | Required |
| ------------ | ------- | ------------------------------------------------------------------------------------- | :------: |
| userResolver | string  | Query which is used to find the user.                                                 |   true   |
| returnSelf?  | boolean | Will return the user ID of the user who executed the command when user was not found. |  false   |

## Example(s)

This will search for a user called Ferel, if it wont find the user then it'll return the command author's user ID:

```javascript
client.command({
  name: "findUser",
  code: `
  $findUser[Ferel;true]
  `
});
```
