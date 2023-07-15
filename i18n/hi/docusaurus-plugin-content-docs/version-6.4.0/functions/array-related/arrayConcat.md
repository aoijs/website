---
title: '$arrayConcat'
description: '$arrayConcat will concat multiple arrays.'
id: arrayConcat
---

`$arrayConcat` will concat multiple arrays.

## प्रोयोग

```php
$arrayConcat[separator;...arrays]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन       | चाहिए |
| --------- | -------- | ------------------ |:-----:|
| separator | स्ट्रिंग | Separator.         | true  |
| ...arrays | स्ट्रिंग | Name of the array. | true  |

## ट्रू (हा)

This will return `This is a test` as it concats array 1 and 2:

```javascript
bot.command({
    name: 'arrayConcat',
    code: `
  $arrayConcat[ ;test1;test2]
  $createArray[array1;This is]
  $createArray[array2;a test]
  `
});
```