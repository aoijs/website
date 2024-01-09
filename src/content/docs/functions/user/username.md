---
title: $username
description: $username will return a user's username.
id: username
---

`$username` will return a user's username.

## Usage

```php
$username[userID?]
```

## Parameters

| Field   | Type                                                                                              | Description  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------ | :------: |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID. |  false   |

## Example(s)

This will return your username:

```javascript
client.command({
  name: "username",
  code: `
  $username[$authorID]
  `
});
```
