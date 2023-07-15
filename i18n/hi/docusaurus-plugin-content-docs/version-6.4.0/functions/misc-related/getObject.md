---
title: '$getObject'
description: '$getObject will return the previously created object.'
id: getObject
---

`$getObject` will return the previously created object.

## प्रोयोग

```php
$getObject[format?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन                                                       |    चाहिए     |
| ------- | ------- | ------------------------------------------------------------------ |:------------:|
| format? | boolean | Format the output? <br /> 1. **true** (default) 2. **false** | असत्य (नहीं) |

## ट्रू (हा)

This will return the object created in `$createObject`:

```javascript
bot.command({
    name: "getObject",
    code: `
    $getObject[true]
    $createObject[{"hello": "bye"}]
    `
});
```