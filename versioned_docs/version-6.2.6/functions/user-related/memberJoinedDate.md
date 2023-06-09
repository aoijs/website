---
title: $memberJoinedDate
description: $memberJoinedDate will return a members join date in MS.
id: memberJoinedDate
---

`$memberJoinedDate` will return a members join date in MS.

## Usage

```php
$memberJoinedDate[userID?;guildID?]
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
    name: 'memberJoinedDate',
    code: `
  $memberJoinedDate[$authorID;$guildID] -> $parseDate[$memberJoinedDate[$authorID;$guildID]]
  `
});
```
