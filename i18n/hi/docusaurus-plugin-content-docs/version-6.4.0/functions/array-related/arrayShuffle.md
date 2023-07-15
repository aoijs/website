---
title: '$arrayShuffle'
description: '$arrayShuffle will shuffle the elements of the given array.'
id: arrayShuffle
---

`$arrayShuffle` will shuffle the elements of the given array.

## प्रोयोग

```php
$arrayShuffle[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| name  | स्ट्रिंग | Array name.  | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```