---
title: '$footer'
description: '$footer will add a footer to an embed.'
id: footer
---

`$footer` will add a footer to an embed.

## प्रोयोग

```php
$footer[index?;content;iconURL?]
```

## पैरामीटर्स

| फील्ड    | टाइप           | डिस्क्रिप्शन                     |    चाहिए     |
| -------- | -------------- | -------------------------------- |:------------:|
| index?   | number         | Embed index.                     | असत्य (नहीं) |
| content  | string, number | Content of the footer text.      |     true     |
| iconURL? | स्ट्रिंग       | Footer Icon (bottom left image). | असत्य (नहीं) |

## ट्रू (हा)

This will create an embed with a footer and title:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $footer[Hello again!;$userAvatar]
  `
});
```