---
title: $attachment
description: $attachment will create an attachment.
id: attachment
---

`$attachment` will create an attachment.

## Usage

```aoi
$attachment[attachment;name;type?]
```

## Parameters

| Field      | Type                                                                                              | Description                                  | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- | :------: |
| attachment | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Content of the attachment, preferably a URL. |   true   |
| name       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Attachment name.                             |   true   |
| type?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Attachment type. <br /> 1. **URL** (default) |  false   |

## Example(s)

This will create an attachment:

```javascript
client.command({
    name: "attachment",
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
