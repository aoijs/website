---
title: '$randomText'
description: '$randomText will return a random word out of the given query'
id: randomText
---

`$randomText` will return a random word out of the given query

## प्रोयोग

```php
$randomText[text;text;...]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                | चाहिए |
| ----- | -------- | ----------------------------------------------------------- |:-----:|
| text  | स्ट्रिंग | Any words/sentences/letters you want to be chosen randomly. | true  |

## ट्रू (हा)

This will return a random text out of `Hello, Bye, Goodnight, See you`:

```javascript
bot.command({
    name: 'randomText',
    code: `
  $randomText[Hello;Bye;Goodnight;See you]
  `
});
```
