---
title: '$checkContains'
description: '$checkContains will check if the given arguments are present within a text.'
id: checkContains
---

`$checkContains` will check if the given arguments are present within the text.

## प्रोयोग

```php
$checkContains[text;...chars]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                | चाहिए |
| ----- | -------- | --------------------------- |:-----:|
| text  | स्ट्रिंग | Text you want to check.     | true  |
| chars | स्ट्रिंग | Text you want to check for. | true  |

## ट्रू (हा)

This will return `true` as `easy` and/or `simple` are present in the given text:

```javascript
bot.command({
    name: 'checkContains',
    code: `
  $checkContains[aoi.js is easy and simple to use for beginners;easy;simple]
  `
});
```
