---
title: '$numberSeparator'
description: '$numberSeparator will separate numbers and make them readable.'
id: numberSeparator
---

`$numberSeparator` will separate numbers and make them readable.

## प्रोयोग

```php
$numberSeparator[num;sep?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                        |    चाहिए     |
| ----- | -------- | ------------------------------------------------------------------- |:------------:|
| num   | number   | Number you want to separate.                                        |     true     |
| sep?  | स्ट्रिंग | Separator which will be used to separate the numbers, default: `,`. | असत्य (नहीं) |

## ट्रू (हा)

This will return `1,000,000`:

```javascript
bot.command({
    name: 'numberSeparator',
    code: `
  $numberSeparator[1000000;,]
  `
});
```
