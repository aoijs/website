---
title: '$removeContains'
description: '$removeContains will remove specific text from a give text.'
id: removeContains
---

`$removeContains` will remove specific text from a give text.

## प्रोयोग

```php
$removeContains[content;...words]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                         | चाहिए |
| -------- | -------- | ------------------------------------ |:-----:|
| content  | स्ट्रिंग | Text where to remove the words from. | true  |
| ...words | स्ट्रिंग | Text to remove from the text.        | true  |

## ट्रू (हा)

This will remove the word "aoi.js from the given text:

```javascript
bot.command({
    name: "removeContains",
    code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```