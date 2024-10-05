---
title: $isConsumed
description: $consume marks the provided item as used, making it unusable until repurchased.
id: consume
---

`$isConsumed` marks the provided item as used, making it unusable until repurchased.

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
   $isConsumed[12345678;$userID]
   $comment[Example value of consumableId]
  `
});
```

