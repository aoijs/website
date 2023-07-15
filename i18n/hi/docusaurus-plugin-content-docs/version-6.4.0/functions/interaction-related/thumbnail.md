---
title: '$thumbnail'
description: '$thumbnail add a thumbnail to an embed (upper right corner image).'
id: thumbnail
---

`$thumbnail` add a thumbnail to an embed (upper right corner image).

## प्रोयोग

```php
$thumbnail[index?;URL]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन          |    चाहिए     |
| ------ | -------- | --------------------- |:------------:|
| index? | number   | Embed position/index. | असत्य (नहीं) |
| URL    | स्ट्रिंग | Thumbnail Image URL.  |     true     |

## ट्रू (हा)

This will create an embed with your user avatar in it:

```javascript
bot.command({
    name: 'thumbnail',
    code: `
   $thumbnail[$userAvatar[$authorID]]
   $description[Hello, that's your Avatar!]`
});
```