---
title: '$splitText'
description: '$splitText will return a value of $textSplit depending on the given index.'
id: splitText
---

`$splitText` will return a value of $textSplit depending on the given index.

## प्रोयोग

```php
$splitText[index]
```

## पैरामीटर्स

| फील्ड | टाइप    | डिस्क्रिप्शन                   | चाहिए |
| ----- | ------- | ------------------------------ |:-----:|
| index | integer | Index of `$textSplit` content. | true  |

## ट्रू (हा)

This will return `aoi.js` as it's the second argument of `$textSplit`:

```javascript
bot.command({
    name: 'splitText',
    code: `
  $splitText[2]
  $textSplit[@akarui/aoi.db//aoi.js;//]
  `
});
```