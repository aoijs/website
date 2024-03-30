---
title: $userGlobalName
description: $userGlobalName will return the user's global name.
id: userGlobalName
---

`$userGlobalName` will return the user's global name.

## Usage

```php
$userGlobalName[userID?]
```

## Parameters

| Field     | Type                                                                                                | Description   | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ------------- | :------: |
| userID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The user ID.  |  false   |

## Example(s)

This will return your global name:

```js
client.command({
  name: `$userGlobalName[$authorID]`
});
```
