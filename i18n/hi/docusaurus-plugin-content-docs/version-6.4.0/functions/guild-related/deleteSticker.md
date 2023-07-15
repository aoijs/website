---
title: '$deleteSticker'
description: '$deleteSticker will delete a given sticker.'
id: deleteSticker
---

`$deleteSticker` will delete a given sticker.

## प्रोयोग

```php
$deleteSticker[guildID;sticker]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                     | चाहिए |
| ------- | -------- | ------------------------------------------------ |:-----:|
| guildID | integer  | The guild ID of where the sticker is located in. | true  |
| sticker | स्ट्रिंग | The name of the sticker.                         | true  |

## ट्रू (हा)

This will delete a sticker of your guild ( make sure to provide an actual sticker name ):

```javascript
bot.command({
    name: 'deleteSticker',
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```