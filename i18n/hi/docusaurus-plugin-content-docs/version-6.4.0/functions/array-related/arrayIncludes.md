---
title: '$arrayIncludes'
description: '$arrayIncludes will check if a specific item exists in the array.'
id: arrayIncludes
---

`$arrayIncludes` will check if a specific item exists in the array.

## प्रोयोग

```php
$arrayIncludes[name;query]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                        | चाहिए |
| ----- | -------- | ------------------------------------------------------------------- |:-----:|
| name  | स्ट्रिंग | Array name.                                                         | true  |
| query | स्ट्रिंग | The element we will be queering for every element inside the array. | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;Leref]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "false" as it doesn't contain the word "Leref".
});
```

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "true" as it contains the word "akarui".
});
```