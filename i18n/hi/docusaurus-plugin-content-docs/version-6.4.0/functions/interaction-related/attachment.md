---
title: '$attachment'
description: '$attachment will create an attachment.'
id: attachment
---

`$attachment` will create an attachment.

## प्रोयोग

```php
$attachment[attachment;name;type?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                       |    चाहिए     |
| ---------- | -------- | -------------------------------------------------- |:------------:|
| attachment | स्ट्रिंग | Content of the attachment, preferably a URL.       |     true     |
| name       | स्ट्रिंग | Attachment name.                                   |     true     |
| टाइप?      | स्ट्रिंग | Attachment type. <br /> 1. **URL** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will create an attachment:

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
