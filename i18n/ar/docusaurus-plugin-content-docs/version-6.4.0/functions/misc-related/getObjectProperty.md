---
title: '$getObjectProperty'
description: '$getObjectProperty will return a object property of a given object.'
id: getObjectProperty
---

`$getObjectProperty` will return a object property of a given object.

## الاستخدام

```php
$getObjectProperty[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين                 | مطلوب |
| ----- | ------ | ---------------------------- |:-----:|
| name  | string | Name of the object property. | true  |

## مثال

This will return the object property of "hello" created in `$createObject`:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```