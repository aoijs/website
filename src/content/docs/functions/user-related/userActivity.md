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

| Field    | Type    | Description   | Required |
| -------- | ------- | ------------- | :------: |
| guildID? | integer | The guild ID. |  false   |
| userID?  | integer | The user ID.  |  false   |

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
