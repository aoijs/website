---
title: '$findNumbers'
description: '$findNumbers will attempt to return all numbers in a message of a given text.'
id: findNumbers
---

`$findNumbers` will attempt to return all numbers in a message of a given text.

## प्रोयोग

```php
$findNumbers[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                         | चाहिए |
| ----- | -------- | ------------------------------------ |:-----:|
| text  | स्ट्रिंग | Text where you want to find numbers. | true  |

## ट्रू (हा)

This will return `25` and remove `Hello, I'm [..] years old` from the given text:

```javascript
bot.command({
    name: 'findNumbers',
    code: `
  $findNumbers[Hello, I'm 25 years old]
  `
});
```
