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

| Field    | Type                                                                                                | Description   | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ------------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The guild ID. |  false   |
| userID?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The user ID.  |  false   |

## Example(s)

This will return your current Activity:

```javascript
client.command({
  name: "userActivity",
  code: `
  $userActivity[$guildID;$authorID]
  `,
});
```
