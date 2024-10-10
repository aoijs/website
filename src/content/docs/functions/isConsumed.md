---
title: $isConsumed
description: $consume will check if the specified consumable has been consumed
id: isConsume
---

`$isConsumed` will check if the specified consumable has been consumed.

## Usage

```aoi
$isConsumed[consumableId;userID?]
```

## Parameters

| Field            | Type                                                                                                | Description                                                         | Required |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| consumableId     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Your consumable ID.                                                 |   true   |
| userID?          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The user ID you want to check.                                      |   false  |


## Example(s)

This will check if the provided `consumableId` has been marked as used for this user:

```javascript
client.command({
    name: "isConsumed",
    code: `
   $isConsumed[12345678;$authorID]
   $comment[Example value of consumableId]
  `
});
```

