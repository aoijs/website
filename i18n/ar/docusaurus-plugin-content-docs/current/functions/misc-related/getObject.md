---
title: '$getObject'
description: '$getObject will return the previously created object.'
id: getObject
---

`$getObject` will return the previously created object.

## الاستخدام

```php
$getObject[format?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                       | مطلوب |
| ------- | ------- | ------------------------------------------------------------------ |:-----:|
| format? | boolean | Format the output? <br /> 1. **true** (default) 2. **false** | false |

## مثال

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