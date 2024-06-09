---
title: $sendSticker
description: $sendSticker will send a sticker in the execution channel.
id: sendSticker
---

`$sendSticker` will send a sticker in the execution channel.

## Usage

```aoi
$sendSticker[resolver]
```

## Parameters

| Field    | Type                                                                                              | Description                    | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | :------: |
| resolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name or ID of the sticker. |   true   |

## Example(s)

This will send the sticker to the current channel, replace `resolver` with an actual sticker name or ID:

```js
client.command({
    name: "sendSticker",
    code: `$sendSticker[resolver]`
});
```
