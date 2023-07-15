---
title: '$arrayPush'
description: '$arrayPush will add given elements to the array.'
id: arrayPush
---

`$arrayPush` will add given elements to the array.

## प्रोयोग

```php
$arrayPush[...elements]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन     | चाहिए |
| ----------- | -------- | ---------------- |:-----:|
| ...elements | स्ट्रिंग | Elements to add. | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-push",
    code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```