---
title: '$concatTextSplit'
description: '$concatTextSplit will concatenates the text with the given separator.'
id: concatTextSplit
---

`$concatTextSplit` will concatenates the text with the given separator.

## प्रोयोग

```php
$concatTextSplit[...text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                       | चाहिए |
| ----- | -------- | -------------------------------------------------- |:-----:|
| text  | स्ट्रिंग | Text to concat to the existing textSplit elements. | true  |

## ट्रू (हा)

This will add `Hello, Bye` to the already used `$textSplit` argument:

```javascript
bot.command({
    name: 'concatTextSplit',
    code: `
  $concatTextSplit[Hello;Bye]
  $textSplit[Goodmorning, Goodnight;, ]
  `
});
```
