---
title: '$arrayJoin'
description: '$arrayJoin will join the array with a given separator.'
id: arrayJoin
---

`$arrayJoin` will join the array with a given separator.

## प्रोयोग

```php
$arrayJoin[name;separator?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन |    चाहिए     |
| ---------- | -------- | ------------ |:------------:|
| name       | स्ट्रिंग | Array name.  |     true     |
| separator? | स्ट्रिंग | Separator.   | असत्य (नहीं) |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-join",
    code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```