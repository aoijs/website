---
title: '$arraySort'
description: '$arraySort will sort a given array.'
id: arraySort
---

`$arraySort` will sort a given array.

## प्रोयोग

```php
$arraySort[name;type?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                                   | चाहिए |
| ----- | -------- | ------------------------------------------------------------------------------ |:-----:|
| name  | स्ट्रिंग | Array name.                                                                    | true  |
| टाइप  | स्ट्रिंग | Type to sort after <br /> 1. **asc** (ascending) 2. **dsc** (descending) | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-sort",
    code: `
  $arrayJoin[array;, ]
  $arraySort[array;asc]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```