---
title: '$isInteger'
description: '$isInteger will check if the given number is an integer or not.'
id: isInteger
---

`$isInteger` will check if the given number is an integer or not.

## प्रोयोग

```php
$isInteger[number]
```

## पैरामीटर्स

| फील्ड  | टाइप   | डिस्क्रिप्शन                                       | चाहिए |
| ------ | ------ | -------------------------------------------------- |:-----:|
| number | number | Number you want to check if its an integer or not. | true  |

## ट्रू (हा)

This checks if your message contains an integer and returns `true` or `false`:

```javascript
bot.command({
    name: 'isInteger',
    code: `
  $isInteger[$message]
  `
});
```
