---
title: '$image'
description: '$image will add an image to an embed.'
id: image
---

`$image` will add an image to an embed.

## प्रोयोग

```php
$image[index?;URL]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                    |    चाहिए     |
| ------ | -------- | ------------------------------- |:------------:|
| index? | number   | Embed index                     | असत्य (नहीं) |
| URL    | स्ट्रिंग | Embed Image URL. (bottom image) |     true     |

## ट्रू (हा)

This will create an embed with an image, title and footer:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $image[$userAvatar]
  $footer[Hello again!;$userAvatar]
  `
});
```