---
title: '$arrayIndexOf'
description: '$arrayIndexOf will return the index of the first found item of the query.'
id: arrayIndexOf
---

`$arrayIndexOf` will return the index of the first found item of the query.

## प्रोयोग

```php
$arrayIndexOf[name;query]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                        | चाहिए |
| ----- | -------- | ------------------------------------------------------------------- |:-----:|
| name  | स्ट्रिंग | Array name.                                                         | true  |
| query | स्ट्रिंग | The element we will be queering for every element inside the array. | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-indexof",
    code: `
  $arrayIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "2" as the word "akarui" is in the 2nd position of the array.
});
```