---
title: '$arrayFind'
description: '$arrayFind will check for the first element in the array which matches the query and return it.'
id: arrayFind
---

`$arrayFind` will check for the first element in the array which matches the query and return it.

## प्रोयोग

```php
$arrayFind[name;query;queryType?;separator?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                        |    चाहिए     |
| ---------- | -------- | ------------------------------------------------------------------- |:------------:|
| name       | स्ट्रिंग | Array name.                                                         |     true     |
| query      | स्ट्रिंग | The element we will be queering for every element inside the array. |     true     |
| queryType? | स्ट्रिंग | The comparison operator.                                            | असत्य (नहीं) |
| separator? | स्ट्रिंग | Separator.                                                          | असत्य (नहीं) |

## Comparison Operators

* `==` — Every item that matches the query.
* `!=` — Every item that doesn't match the query.
* `>`  — All items on the "left" of the found item, excluding itself.
* `<`  — All items on the "right" of the found item, excluding itself.
* `>=` — All items on the "left" of the found item, including itself.
* `<=` — All items on the "right" of the found item, including itself.

## ट्रू (हा)

```javascript
bot.command({
    name: "array-find",
    code: `
  $arrayFind[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "akarui" as it matches the query.
});
```