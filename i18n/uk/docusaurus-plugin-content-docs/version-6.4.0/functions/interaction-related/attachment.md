---
title: '$attachment'
description: '$attachment will create an attachment.'
id: attachment
---

`$attachment` will create an attachment.

## Використання

```php
$attachment[attachment;name;type?]
```

## Параметри

| Поле       | Тип   | Опис                                               | Обов'язковий |
| ---------- | ----- | -------------------------------------------------- |:------------:|
| attachment | рядок | Content of the attachment, preferably a URL.       |     так      |
| назва      | рядок | Attachment name.                                   |     так      |
| тип?       | рядок | Attachment type. <br /> 1. **URL** (default) |      ні      |

## Приклад(и)

This will create an attachment:

```javascript
bot.command({
    name: 'attachment',
    code: `
  $attachment[https://cdn.discordapp.com/emojis/1063432790697328710.webp?size=96&quality=lossless;boost-icon.png;URL]
  `
});
```
