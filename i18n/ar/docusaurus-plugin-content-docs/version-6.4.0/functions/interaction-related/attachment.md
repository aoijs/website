---
title: '$attachment'
description: '$attachment will create an attachment.'
id: attachment
---

`$attachment` will create an attachment.

## الاستخدام

```php
$attachment[attachment;name;type?]
```

## البارامترات

| Field      | النوع  | الديسكبربشين                                       | مطلوب |
| ---------- | ------ | -------------------------------------------------- |:-----:|
| attachment | string | Content of the attachment, preferably a URL.       | true  |
| name       | string | Attachment name.                                   | true  |
| النوع?     | string | Attachment type. <br /> 1. **URL** (default) | false |

## مثال

This will create an attachment:

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
