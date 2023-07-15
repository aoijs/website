---
title: '$arrayLastIndexOf'
description: '$arrayLastIndexOf will return the index of the last found item of the query.'
id: arrayLastIndexOf
---

`$arrayLastIndexOf` will return the index of the last found item of the query.

## प्रोयोग

```php
$arrayLastIndexOf[name;query]
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
  $arrayLastIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;akarui;documents;bot]
  `
    // It will return "3" as the word "akarui" is in the 3rd position of the array.
});
```