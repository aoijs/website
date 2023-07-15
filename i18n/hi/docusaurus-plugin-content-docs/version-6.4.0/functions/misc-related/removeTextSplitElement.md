---
title: '$removeTextSplitElement'
description: '$removeTextSplitElement will remove a specific text split element.'
id: removeTextSplitElement
---

`$removeTextSplitElement` will remove a specific text split element.

## प्रोयोग

```php
$removeTextSplitElement[element]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                  | चाहिए |
| ------- | -------- | ----------------------------- |:-----:|
| element | स्ट्रिंग | Text split element to remove. | true  |

## ट्रू (हा)

This will remove the word "bye" from the array:

```javascript
bot.command({
    name: "removeTextSplitElement",
    code: `
    $removeTextSplitElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```