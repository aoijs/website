---
title: '$createArray'
description: '$createArray will create a new array with given elements.'
id: createArray
---

`$createArray` will create a new array with given elements.

## प्रोयोग

```php
$createArray[name;...elements]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन     | चाहिए |
| ----------- | -------- | ---------------- |:-----:|
| name        | स्ट्रिंग | Array name.      | true  |
| ...elements | स्ट्रिंग | Elements to add. | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-create",
    code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```