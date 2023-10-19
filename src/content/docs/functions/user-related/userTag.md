---
title: $userTag
description: $userTag will return a user's username and discriminator.
id: userTag
---

`$userTag` will return a user's username and discriminator.

## Usage

```php
$userTag[userID?]
```

## Parameters

| Field   | Type                                                                                                | Description  | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ------------ | :------: |
| userID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The user ID. |  false   |

## Example(s)

This will return your username and discriminator:

```javascript
client.command({
  name: "userTag",
  code: `
  $userTag[$authorID]
  `,
});
```
