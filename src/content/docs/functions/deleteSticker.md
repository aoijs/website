---
title: $deleteSticker
description: $deleteSticker will delete a given sticker.
id: deleteSticker
---

`$deleteSticker` will delete a given sticker.

## Usage

```aoi
$deleteSticker[guildID;sticker]
```

## Parameters

| Field   | Type                                                                                              | Description                                      | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of where the sticker is located in. |   true   |
| sticker | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the sticker.                         |   true   |

## Example(s)

This will delete a sticker of your guild ( make sure to provide an actual sticker name ):

```javascript
client.command({
    name: "deleteSticker",
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```
