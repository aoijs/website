---
title: '$createObject'
description: '$createObject will create a new object.'
id: createObject
---

`$createObject` will create a new object.

## प्रोयोग

```php
$createObject[object]
```

## पैरामीटर्स

| फील्ड  | टाइप   | डिस्क्रिप्शन | चाहिए |
| ------ | ------ | ------------ |:-----:|
| object | object | Json object. | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "createObject",
    code: `
  $createObject[{
    "hello": "bye",
    "bye": "hello"
  }]
  `
});
```