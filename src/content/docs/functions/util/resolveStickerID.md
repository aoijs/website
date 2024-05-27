---
title: $resolveStickerID
description: $resolveStickerID will return the ID of the sticker.
id: resolveStickerId
---

`$resolveStickerID` will return the ID of the sticker.

## Usage

```aoi
$resolveStickerID[resolver]
```

## Parameters

| Field    | Type                                                                                              | Description                    | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | :------: |
| resolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name or ID of the sticker. |   true   |

## Example(s)

This will return the ID of the sticker, replace `resolver` with an actual sticker name or ID:

```js
client.command({
    name: "resolveStickerID",
    code: `$resolveStickerID[resolver]`
});
```
