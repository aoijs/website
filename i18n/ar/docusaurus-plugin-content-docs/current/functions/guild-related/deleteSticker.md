---
title: '$deleteSticker'
description: '$deleteSticker will delete a given sticker.'
id: deleteSticker
---

`$deleteSticker` will delete a given sticker.

## الاستخدام

```php
$deleteSticker[guildID;sticker]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                     | مطلوب |
| ------- | ------- | ------------------------------------------------ |:-----:|
| guildID | Integer | The guild ID of where the sticker is located in. | true  |
| sticker | string  | The name of the sticker.                         | true  |

## مثال

This will delete a sticker of your guild ( make sure to provide an actual sticker name ):

```javascript
bot.command({
    name: 'deleteSticker',
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```