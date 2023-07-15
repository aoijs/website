---
title: '$isValidObject'
description: '$isValidObject checks if the given json is a valid object.'
id: isValidObject
---

`$isValidObject` checks if the given json is a valid object.

## प्रोयोग

```php
$isValidObject[object]
```

## पैरामीटर्स

| फील्ड  | टाइप   | डिस्क्रिप्शन | चाहिए |
| ------ | ------ | ------------ |:-----:|
| object | object | JSON object. | true  |

## ट्रू (हा)

This will return `true` as the given object is a valid JSON object:

```javascript
bot.command({
    name: 'isValidObject',
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```
