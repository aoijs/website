---
title: $memberJoinPosition
description: $memberJoinPosition will return a members join position.
id: memberJoinPosition
---

`$memberJoinPosition` will return a members join position.

## Usage

```php
$memberJoinPosition[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description          | Required |
| -------- | --------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| userID?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the user.  |  false   |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the guild. |  false   |

## Example(s)

This will return your join position, if you're the owner then it'd be `1`:

```javascript
client.command({
  name: "memberJoinPosition",
  code: `
  $memberJoinPosition[$authorID;$guildID]
  `,
});
```
