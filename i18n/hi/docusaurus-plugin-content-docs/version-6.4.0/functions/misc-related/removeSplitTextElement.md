---
title: '$removeSplitTextElement'
description: '$removeSplitTextElement will remove a specific split text element.'
id: removeSplitTextElement
---

`$removeSplitTextElement` will remove a specific split text element.

## प्रोयोग

```php
$removeSplitTextElement[...elements]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन                   | चाहिए |
| ----------- | -------- | ------------------------------ |:-----:|
| ...elements | स्ट्रिंग | Split text elements to remove. | true  |

## ट्रू (हा)

This will remove the word "bye" from the array:

```javascript
bot.command({
    name: "removeSplitTextElement",
    code: `
    $removeSplitTextElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```