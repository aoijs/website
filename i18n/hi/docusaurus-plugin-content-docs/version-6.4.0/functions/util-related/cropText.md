---
title: '$cropText'
description: '$cropText will crop given text.'
id: cropText
---

`$cropText` is used to crop given text.

## प्रोयोग

```php
$cropText[text;limit;start?]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                                                             |    चाहिए     |
| ------ | -------- | ------------------------------------------------------------------------ |:------------:|
| text   | स्ट्रिंग | Text you want to slice.                                                  |     true     |
| limit  | number   | Limit of the cropped text/will start to crop any text coming after that. |     true     |
| start? | number   | Where cropping should start.                                             | असत्य (नहीं) |

## ट्रू (हा)

This will return `bye` and remove `hello and` from the given text:

```javascript
bot.command({
    name: 'cropText',
    code: `
$cropText[hello and bye;20;9]
  `
});
```
