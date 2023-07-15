---
title: '$arraySome'
description: '$arraySome will check for given elements in the array.'
id: arraySome
---

`$arraySome` will check for given elements in the array and return boolean.

## प्रोयोग

```php
$arraySome[name;query;queryType?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                        |    चाहिए     |
| ---------- | -------- | ------------------------------------------------------------------- |:------------:|
| name       | स्ट्रिंग | Array name.                                                         |     true     |
| query      | स्ट्रिंग | The element we will be queering for every element inside the array. |     true     |
| queryType? | स्ट्रिंग | The comparison operator.                                            | असत्य (नहीं) |

* `==` — Every item that matches the query.
* `!=` — Every item that doesn't match the query.
* `>`  — All items on the "left" of the found item, excluding itself.
* `<`  — All items on the "right" of the found item, excluding itself.
* `>=` — All items on the "left" of the found item, including itself.
* `<=` — All items on the "right" of the found item, including itself.

## ट्रू (हा)

```javascript
bot.command({
    name: "array-some",
    code: `
  $arraySome[array;aoi.js;==]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```