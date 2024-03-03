---
title: $userActivity
description: $userActivity will return a user's activity.
id: userActivity
---

`$userActivity` will return a user's current activity.

## Usage

```php
$userActivity[guildID?;userID?]
```

## Parameters

| Field    | Type                                                                                              | Description   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID. |  false   |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID.  |  false   |

## Example(s)

This will return your current Activity:

```javascript
client.command({
  name: "userActivity",
  code: `
  $userActivity[$guildID;$authorID]
  `
});
```
