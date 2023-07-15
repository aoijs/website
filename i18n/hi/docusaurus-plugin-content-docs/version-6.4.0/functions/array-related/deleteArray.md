---
title: '$deleteArray'
description: '$deleteArray will delete a previously created array.'
id: deleteArray
---

`$deleteArray` will delete a previously created array.

## प्रोयोग

```php
$deleteArray[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| name  | स्ट्रिंग | Array name.  | true  |

## ट्रू (हा)

This will delete the array "array":

```javascript
bot.command({
    name: "deleteArray",
    code: `
  $deleteArray[array]
  $createArray[array;Hello;This;Is;Great]
  `
});
```