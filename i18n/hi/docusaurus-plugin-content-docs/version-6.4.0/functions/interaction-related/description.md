---
title: '$description'
description: '$description is used for embeds to add an description field.'
id: डिस्क्रिप्शन
---

`$description` is used for embeds to add an description field.

## प्रोयोग

```php
$description[index?;description]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                           |    चाहिए     |
| ------------ | -------- | -------------------------------------- |:------------:|
| index?       | number   | The embed index.                       | असत्य (नहीं) |
| डिस्क्रिप्शन | स्ट्रिंग | The content of the embeds description. |     true     |

## ट्रू (हा)

This will send an embed with the content `aoi.js is great!`:

```javascript
bot.command({
    name: 'embed',
    code: `
  $description[aoi.js is great!]
  `
});
```