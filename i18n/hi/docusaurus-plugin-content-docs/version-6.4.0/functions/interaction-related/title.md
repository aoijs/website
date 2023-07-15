---
title: '$title'
description: '$title add a title to an embed.'
id: title
---

`$title` add a title to an embed.

## प्रोयोग

```php
$title[index?;title;URL?]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                     |    चाहिए     |
| ------ | -------- | -------------------------------- |:------------:|
| index? | number   | The index of the embed.          | असत्य (नहीं) |
| title  | स्ट्रिंग | The content of the embed title.  |     true     |
| URL?   | स्ट्रिंग | URL which will be the hyperlink. | असत्य (नहीं) |

## ट्रू (हा)

This will create an embed with a title:

```javascript
bot.command({
    name: 'title',
    code: `
   $title[Hello!;https://aoi.js.org]
   $description[The title contains a hyperlink..]`
});
```