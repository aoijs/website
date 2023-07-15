---
title: '$randomString'
description: '$randomString will generate a random string.'
id: randomString
---

`$randomString` will generate a random string.

## प्रोयोग

```php
$randomString[range;diffExec?]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                          |    चाहिए     |
| --------- | ------- | ------------------------------------- |:------------:|
| range     | number  | Range of the random generated string. |     true     |
| diffExec? | boolean |                                       | असत्य (नहीं) |

## ट्रू (हा)

This will return a random string of twenty characters:

```javascript
bot.command({
    name: 'randomString',
    code: `
  $randomString[20]
  `
});
```
