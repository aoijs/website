---
title: '$charCount'
description: '$charCount will count the given characters in a text and return the amount of characters.'
id: charCount
---

`$charCount` will count the given characters in a text and return the amount of characters.

## प्रोयोग

```php
$charCount[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                           | चाहिए |
| ----- | -------- | ------------------------------------------------------ |:-----:|
| text  | स्ट्रिंग | The text that will be the character count returned of. | true  |

## ट्रू (हा)

This will return `77` as there are 77 characters in this text:

```javascript
bot.command({
    name: 'charCount',
    code: `
  $charCount[aoi.js is one of the simplest and easiest ways to create your own Discord Bot]
  `
});
```
