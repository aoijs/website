---
title: $memberJoinDate
description: $memberJoinDate will return a members join date in MS.
id: memberJoinDate
---

`$memberJoinDate` will return a members join date in MS.

## Usage

```php
$memberJoinDate[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| userID?  | integer | The ID of the user.  |  false   |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return your join date in MS and parsed date:

```javascript
bot.command({
  name: "memberJoinDate",
  code: `
  $memberJoinDate[$authorID;$guildID] -> $parseDate[$memberJoinDate[$authorID;$guildID]]
  `,
});
```
