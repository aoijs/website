---
title: $consume
description: $consume marks the provided item as consumed, making it unusable until repurchased
id: consume
---

`$consume` marks the provided item as consumed, making it unusable until repurchased.

## Usage

```aoi
$consume[consumableId]
```

## Parameters

| Field            | Type                                                                                                | Description                                                         | Required |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| consumableId     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Your consumable ID.                                                 |   true   |


## Example(s)

This will mark the provided `consumableId` as consumed.

```javascript
client.command({
    name: "consume",
    code: `
   $consume[12345678]
   $comment[Example value of consumableId]
  `
});
```

